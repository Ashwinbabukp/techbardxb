"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AiNetworkSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const panel = canvas.parentElement as HTMLElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = panel.clientWidth;
    let h = panel.clientHeight;
    if (!w || !h) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = w < 480 ? 5.4 : 6.0;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);

    const group = new THREE.Group();
    scene.add(group);

    // Fibonacci-distributed points across a sphere
    const COUNT = 130;
    const RADIUS = 2.2;
    const positions: number[] = [];
    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      positions.push(Math.cos(theta) * r * RADIUS, y * RADIUS, Math.sin(theta) * r * RADIUS);
    }
    const posArray = new Float32Array(positions);

    function makeDotTexture() {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const ctx = c.getContext("2d")!;
      const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.25, "rgba(0,224,220,0.9)");
      g.addColorStop(1, "rgba(0,176,173,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    }

    const dotTexture = makeDotTexture();
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const pointsMat = new THREE.PointsMaterial({
      size: 0.115,
      map: dotTexture,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0x00e0dc,
    });
    const pointCloud = new THREE.Points(pointsGeo, pointsMat);
    group.add(pointCloud);

    // connecting lines between nearby nodes -> "network" look
    const linePositions: number[] = [];
    const threshold = 1.05;
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < threshold) {
          linePositions.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
          linePositions.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0x00b0ad, transparent: true, opacity: 0.18 });
    const lineSegments = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lineSegments);

    // inner wireframe core
    const coreGeo = new THREE.IcosahedronGeometry(1.15, 1);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x00b0ad, wireframe: true, transparent: true, opacity: 0.25 });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    let mouseX = 0;
    let mouseY = 0;
    function onMouseMove(e: MouseEvent) {
      const rect = panel.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    }
    panel.addEventListener("mousemove", onMouseMove);

    function onResize() {
      w = panel.clientWidth;
      h = panel.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.position.z = w < 480 ? 5.4 : 6.0;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize);

    let raf = 0;
    function animate() {
      raf = requestAnimationFrame(animate);
      group.rotation.y += 0.0022;
      core.rotation.y -= 0.001;
      core.rotation.x += 0.0006;
      group.rotation.x += (mouseY * 0.3 - group.rotation.x) * 0.03;
      group.rotation.y += mouseX * 0.0015;
      renderer.render(scene, camera);
    }

    let io: IntersectionObserver | null = null;

    if (reduceMotion) {
      renderer.render(scene, camera);
    } else {
      animate();
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) cancelAnimationFrame(raf);
            else animate();
          });
        },
        { threshold: 0.05 }
      );
      io.observe(panel);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      panel.removeEventListener("mousemove", onMouseMove);
      io?.disconnect();
      pointsGeo.dispose();
      pointsMat.dispose();
      dotTexture.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}
