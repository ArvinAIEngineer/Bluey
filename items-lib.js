// items-lib.js
// Procedural Three.js Models for Bluey & Bingo Challenges
// No external downloads needed - all generated with primitives!

(function () {
  const M = {
    // Basic Materials
    red: new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 0.5, roughness: 0.2 }),
    blue: new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x00ffff, emissiveIntensity: 0.5, roughness: 0.2 }), // Cyan
    white: new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.5, roughness: 0.1 }),
    pink: new THREE.MeshStandardMaterial({ color: 0xff00ff, emissive: 0xff00ff, emissiveIntensity: 0.5, roughness: 0.2 }),
    orange: new THREE.MeshStandardMaterial({ color: 0xff6600, emissive: 0xff6600, emissiveIntensity: 0.5, roughness: 0.2 }),
    gold: new THREE.MeshStandardMaterial({ color: 0xffcc00, emissive: 0xffcc00, emissiveIntensity: 0.3, metalness: 0.8 }),
    purple: new THREE.MeshStandardMaterial({ color: 0x9900ff, emissive: 0x9900ff, emissiveIntensity: 0.5, roughness: 0.2 }),
    black: new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 1.0 }),
    contrast: new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.0, transparent: true, opacity: 0.9 }), // White base disk
  };

  // Helper to build compound items with a contrast base
  function buildGroup() {
    const g = new THREE.Group();
    // Add a high-contrast white disk at the ground level (y ≈ 0 relative to group)
    const base = new THREE.Mesh(new THREE.CircleGeometry(0.35, 12), M.contrast);
    base.rotation.x = -Math.PI / 2;
    base.position.y = -0.4; // Slightly below the item
    g.add(base);
    return g;
  }

  // --- ITEM BUILDERS ---
  const builders = {
    biscuit: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.1, 12), M.biscuit);
      b.rotation.x = Math.PI / 2; g.add(b);
      // Choc chips
      [[-0.1, 0.1], [0.15, 0.05], [0, -0.15], [-0.15, -0.1]].forEach(([cx, cy]) => {
        const c = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), M.choc);
        c.position.set(cx, cy, 0.05); g.add(c);
      });
      return g;
    },
    apple: () => {
      const g = buildGroup();
      const a = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), M.red);
      a.scale.y = 0.9; g.add(a);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.1), M.brown);
      stem.position.y = 0.25; g.add(stem);
      const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), M.green);
      leaf.scale.set(1, 0.2, 2); leaf.position.set(0.05, 0.25, 0); leaf.rotation.z = 0.5; g.add(leaf);
      return g;
    },
    banana: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.6, 8), M.yellow);
      b.rotation.z = Math.PI / 4;
      // Curve hack
      const b2 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.6, 8), M.yellow);
      b2.rotation.z = -Math.PI / 4; b2.position.set(0.3, 0.3, 0);
      g.add(b); g.add(b2);
      g.scale.set(0.7, 0.7, 0.7);
      return g;
    },
    flower: (colMat) => {
      const g = buildGroup();
      const petalM = colMat || M.pink;
      for (let j = 0; j < 6; j++) {
        const a = (j / 6) * Math.PI * 2;
        const petal = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), petalM);
        petal.position.set(Math.cos(a) * 0.22, 0, Math.sin(a) * 0.22);
        petal.scale.y = 0.45; g.add(petal);
      }
      const ctr = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), M.yellow);
      ctr.position.y = 0.05; g.add(ctr);
      return g;
    },
    ball: (colMat) => {
      const g = buildGroup();
      g.add(new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), colMat || M.red));
      return g;
    },
    coin: () => {
      const g = buildGroup();
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.05, 16), M.gold);
      c.rotation.x = Math.PI / 2; g.add(c);
      return g;
    },
    gem: () => {
      const g = buildGroup();
      const c = new THREE.Mesh(new THREE.OctahedronGeometry(0.2), M.gem);
      c.scale.y = 1.5; g.add(c);
      return g;
    },
    bone: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.5, 8), M.white);
      b.rotation.z = Math.PI / 2; g.add(b);
      [[-0.25, 0.05], [-0.25, -0.05], [0.25, 0.05], [0.25, -0.05]].forEach(([cx, cy]) => {
        const e = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), M.white);
        e.position.set(cx, cy, 0); g.add(e);
      });
      return g;
    },
    carrot: () => {
      const g = buildGroup();
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.5, 8), M.orange);
      c.rotation.x = -Math.PI / 2; g.add(c);
      const l = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.2, 4), M.green);
      l.position.set(0, 0, -0.3); l.rotation.x = Math.PI / 2; g.add(l);
      return g;
    },
    mushroom: () => {
      const g = buildGroup();
      const s = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.3, 8), M.white);
      s.position.y = -0.15; g.add(s);
      const c = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2), M.red);
      g.add(c);
      return g;
    },
    star: () => {
      const g = buildGroup();
      const shape = new THREE.Shape();
      const pts = 5; const or = 0.3; const ir = 0.12;
      for (let i = 0; i < pts * 2; i++) {
        const a = (i / (pts * 2)) * Math.PI * 2;
        const r = i % 2 === 0 ? or : ir;
        if (i === 0) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r);
        else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
      }
      const s = new THREE.Mesh(new THREE.ExtrudeGeometry(shape, { depth: 0.1, bevelEnabled: false }), M.yellow);
      s.position.z = -0.05; g.add(s);
      return g;
    },
    present: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), M.blue); g.add(b);
      const r1 = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.42, 0.05), M.yellow); g.add(r1);
      const r2 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.42, 0.42), M.yellow); g.add(r2);
      const bow = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), M.yellow);
      bow.position.y = 0.25; g.add(bow);
      return g;
    },
    crown: () => {
      const g = buildGroup();
      const c = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.2, 0.3, 8, 1, true), M.gold);
      c.material.side = THREE.DoubleSide; g.add(c);
      const gem = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), M.red);
      gem.position.set(0, 0.15, 0); g.add(gem);
      return g;
    },
    orange: () => {
      const g = buildGroup();
      const a = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), M.orange);
      g.add(a);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.1), M.brown);
      stem.position.y = 0.25; g.add(stem);
      return g;
    },
    strawberry: () => {
      const g = buildGroup();
      const s = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.4, 8), M.red);
      s.rotation.x = Math.PI; g.add(s);
      const l = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), M.green);
      l.scale.set(1.5, 0.2, 1.5); l.position.y = 0.2; g.add(l);
      return g;
    },
    watermelon: () => {
      const g = buildGroup();
      const w = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), M.green);
      w.scale.set(1.2, 0.8, 1.2); g.add(w);
      // Add white stripes for contrast
      for (let i = 0; i < 4; i++) {
        const s = new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.31, 0.02, 12), M.white);
        s.rotation.z = (i / 4) * Math.PI; g.add(s);
      }
      return g;
    },
    cupcake: () => {
      const g = buildGroup();
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.15, 0.2, 12), M.purple);
      base.position.y = -0.1; g.add(base);
      const top = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), M.pink);
      top.position.y = 0.1; top.scale.y = 0.75; g.add(top);
      return g;
    },
    donut: () => {
      const g = buildGroup();
      const t = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.1, 12, 24), M.orange);
      t.rotation.x = Math.PI / 2; g.add(t);
      return g;
    },
    lollipop: () => {
      const g = buildGroup();
      const s = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5), M.white);
      s.position.y = -0.2; g.add(s);
      const h = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), M.red);
      h.position.y = 0.15; g.add(h);
      return g;
    },
    pizza: () => {
      const g = buildGroup();
      const s = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.05, 3), M.yellow);
      s.rotation.y = Math.PI / 6; g.add(s);
      return g;
    },
    leaf: () => {
      const g = buildGroup();
      const l = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), M.green);
      l.scale.set(1, 0.1, 2); l.rotation.z = 0.2; g.add(l);
      // White rim for visibility
      const r = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.02, 4, 12), M.white);
      r.rotation.x = Math.PI / 2; r.scale.z = 2; g.add(r);
      return g;
    },
    shell: () => {
      const g = buildGroup();
      const s = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.4, 8), M.pink);
      s.rotation.x = -Math.PI / 2; g.add(s);
      return g;
    },
    crystal: () => {
      const g = buildGroup();
      const c = new THREE.Mesh(new THREE.OctahedronGeometry(0.25), M.gem);
      g.add(c);
      return g;
    },
    balloon: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), M.red);
      b.scale.y = 1.2; g.add(b);
      const s = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.4), M.white);
      s.position.y = -0.4; g.add(s);
      return g;
    },
    rocket: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.4), M.white); g.add(b);
      const t = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.2, 8), M.red); t.position.y = 0.3; g.add(t);
      return g;
    },
    gift: () => builders.present(),
    key: () => {
      const g = buildGroup();
      const r = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.03, 8, 16), M.gold);
      r.position.y = 0.2; g.add(r);
      const s = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.3), M.gold);
      s.position.y = -0.05; g.add(s);
      return g;
    },
    chest: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.3, 0.3), M.brown); g.add(b);
      return g;
    },
    egg: () => {
      const g = buildGroup();
      const e = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), M.white);
      e.scale.y = 1.4; g.add(e);
      return g;
    },
    fish: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), M.blue);
      b.scale.set(1.5, 0.8, 0.5); g.add(b);
      const t = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.2, 3), M.blue);
      t.position.x = -0.25; t.rotation.z = Math.PI / 2; g.add(t);
      return g;
    },
    cherry: () => {
      const g = buildGroup();
      [[-0.12, 0], [0.12, -0.05]].forEach(([x, y]) => {
        const c = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), M.red);
        c.position.set(x, y, 0); g.add(c);
        const s = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.3), M.brown);
        s.position.set(x, y + 0.2, 0); s.rotation.z = x > 0 ? -0.4 : 0.4; g.add(s);
      });
      return g;
    },
    heart: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 8), M.red);
      const l = b.clone(); l.position.x = -0.12; g.add(l);
      const r = b.clone(); r.position.x = 0.12; g.add(r);
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.4, 8), M.red);
      c.rotation.x = Math.PI; c.position.y = -0.15; g.add(c);
      return g;
    },
    kite: () => {
      const g = buildGroup();
      const k = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.02, 4), M.blue);
      k.rotation.y = Math.PI / 4; g.add(k);
      const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.5), M.white);
      tail.position.y = -0.4; g.add(tail);
      return g;
    },
    car: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.2, 0.3), M.red); g.add(b);
      const t = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.25), M.blue); t.position.y = 0.15; g.add(t);
      [[-0.15, -0.1, 0.15], [0.15, -0.1, 0.15], [-0.15, -0.1, -0.15], [0.15, -0.1, -0.15]].forEach(([x, y, z]) => {
        const w = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.05, 8), M.black);
        w.rotation.x = Math.PI / 2; w.position.set(x, y, z); g.add(w);
      });
      return g;
    },
    robot: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.2), M.silver); g.add(b);
      const h = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.15), M.silver); h.position.y = 0.3; g.add(h);
      const e1 = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), M.red); e1.position.set(0.05, 0.35, 0.08); g.add(e1);
      const e2 = e1.clone(); e2.position.x = -0.05; g.add(e2);
      return g;
    },
    dice: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.35), M.white); g.add(b);
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), M.black);
      dot.position.z = 0.18; g.add(dot);
      return g;
    },
    trophy: () => {
      const g = buildGroup();
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.1, 0.3, 12), M.gold); cup.position.y = 0.15; g.add(cup);
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.05), M.brown); g.add(base);
      return g;
    },
    potion: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), M.purple); b.scale.y = 1.2; g.add(b);
      const n = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.2), M.white); n.position.y = 0.25; g.add(n);
      return g;
    },
    ring: () => {
      const g = buildGroup();
      const r = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.04, 8, 16), M.gold); r.rotation.x = Math.PI / 2; g.add(r);
      const d = new THREE.Mesh(new THREE.OctahedronGeometry(0.08), M.gem); d.position.y = 0.18; g.add(d);
      return g;
    },
    diamond: () => {
      const g = buildGroup();
      const d = new THREE.Mesh(new THREE.OctahedronGeometry(0.25), M.gem); g.add(d);
      return g;
    },
    medal: () => {
      const g = buildGroup();
      const m = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.03, 16), M.gold); m.rotation.x = Math.PI / 2; g.add(m);
      const r = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.3, 0.02), M.blue); r.position.y = 0.2; g.add(r);
      return g;
    },
    butterfly: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.3), M.black); g.add(b);
      [[-0.15, 0.1], [0.15, 0.1]].forEach(([x, y]) => {
        const w = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), M.pink);
        w.scale.set(1, 0.05, 1.5); w.position.set(x, y, 0); w.rotation.z = x > 0 ? 0.5 : -0.5; g.add(w);
      });
      return g;
    },
    bee: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), M.yellow); b.scale.z = 1.6; g.add(b);
      const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.05, 12), M.black); stripe.rotation.x = Math.PI / 2; g.add(stripe);
      const w1 = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), M.white); w1.scale.set(1, 0.02, 0.6); w1.position.set(0.15, 0.15, 0); g.add(w1);
      const w2 = w1.clone(); w2.position.x = -0.15; g.add(w2);
      return g;
    },
    snail: () => {
      const g = buildGroup();
      const s = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.08, 8, 16), M.brown); g.add(s);
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.5), M.white); b.position.y = -0.15; b.rotation.z = Math.PI / 2; g.add(b);
      return g;
    },
    frog: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), M.green); b.scale.y = 0.7; g.add(b);
      const e1 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), M.white); e1.position.set(0.12, 0.15, 0.1); g.add(e1);
      const e2 = e1.clone(); e2.position.x = -0.12; g.add(e2);
      // Give it big white eyes to pop
      return g;
    },
    pawprint: () => {
      const g = buildGroup();
      const pad = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 8), M.brown); pad.scale.y = 0.2; g.add(pad);
      [[0.15, 0.15], [-0.15, 0.15], [0, 0.25]].forEach(([x, z]) => {
        const toe = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), M.brown); toe.position.set(x, 0, z); toe.scale.y = 0.2; g.add(toe);
      });
      return g;
    },
    acorn: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), M.brown);
      b.scale.y = 1.2; g.add(b);
      const c = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2), M.wood);
      c.position.y = 0.05; g.add(c);
      return g;
    },
    pinecone: () => {
      const g = buildGroup();
      for (let i = 0; i < 3; i++) {
        const c = new THREE.Mesh(new THREE.CylinderGeometry(0.05 + i * 0.05, 0.15 + i * 0.02, 0.2, 8), M.brown);
        c.position.y = -i * 0.15; g.add(c);
      }
      return g;
    },
    top: () => {
      const g = buildGroup();
      const c = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.4, 16), M.red);
      c.rotation.x = Math.PI; g.add(c);
      return g;
    },
    lantern: () => {
      const g = buildGroup();
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.4, 8), M.red); g.add(b);
      const t = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.05, 8), M.gold); t.position.y = 0.2; g.add(t);
      const v = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.05, 8), M.gold); v.position.y = -0.2; g.add(v);
      return g;
    }
  };

  // --- CATALOG ---
  // A catalog of 50 items leveraging variants of the builders
  const catalog = [
    // FOOD
    { id: 'biscuit', name: 'Biscuit', emoji: '🍪', cat: 'Food', msg: 'Yum!', color: 0xffd19a, build: builders.biscuit },
    { id: 'apple', name: 'Apple', emoji: '🍎', cat: 'Food', msg: 'Crunchy!', color: 0xff0000, build: builders.apple },
    { id: 'banana', name: 'Banana', emoji: '🍌', cat: 'Food', msg: 'Monkey time!', color: 0xffff00, build: builders.banana },
    { id: 'orange', name: 'Orange', emoji: '🍊', cat: 'Food', msg: 'Zesty!', color: 0xffa500, build: builders.orange },
    { id: 'strawberry', name: 'Strawberry', emoji: '🍓', cat: 'Food', msg: 'Sweet!', color: 0xff00ff, build: builders.strawberry },
    { id: 'watermelon', name: 'Watermelon', emoji: '🍉', cat: 'Food', msg: 'Refreshing!', color: 0x00ff00, build: builders.watermelon },
    { id: 'cherry', name: 'Cherry', emoji: '🍒', cat: 'Food', msg: 'Double fun!', color: 0xff0000, build: builders.cherry },
    { id: 'carrot', name: 'Carrot', emoji: '🥕', cat: 'Food', msg: 'Healthy!', color: 0xffa500, build: builders.carrot },
    { id: 'cupcake', name: 'Cupcake', emoji: '🧁', cat: 'Food', msg: 'Fancy!', color: 0xff00ff, build: builders.cupcake },
    { id: 'donut', name: 'Donut', emoji: '🍩', cat: 'Food', msg: 'Sprinkles!', color: 0xffa500, build: builders.donut },
    { id: 'lollipop', name: 'Lollipop', emoji: '🍭', cat: 'Food', msg: 'Sweet!', color: 0x00ffff, build: builders.lollipop },
    { id: 'pizza', name: 'Pizza', emoji: '🍕', cat: 'Food', msg: 'Cowabunga!', color: 0xffff00, build: builders.pizza },

    // NATURE
    { id: 'flower', name: 'Flower', emoji: '🌸', cat: 'Nature', msg: 'So pretty!', color: 0xff00ff, build: builders.flower },
    { id: 'sunflower', name: 'Sunflower', emoji: '🌻', cat: 'Nature', msg: 'Sunny!', color: 0xffff00, build: () => builders.flower(M.yellow) },
    { id: 'mushroom', name: 'Mushroom', emoji: '🍄', cat: 'Nature', msg: 'Fungi!', color: 0xff0000, build: builders.mushroom },
    { id: 'leaf', name: 'Leaf', emoji: '🍀', cat: 'Nature', msg: 'Green!', color: 0x00ff00, build: builders.leaf },
    { id: 'acorn', name: 'Acorn', emoji: '🌰', cat: 'Nature', msg: 'Nutty!', color: 0x8b4513, build: builders.acorn },
    { id: 'shell', name: 'Shell', emoji: '🐚', cat: 'Nature', msg: 'Ocean!', color: 0xffffff, build: builders.shell },
    { id: 'crystal', name: 'Crystal', emoji: '💎', cat: 'Nature', msg: 'Magic!', color: 0x00ffff, build: builders.crystal },
    { id: 'star', name: 'Star', emoji: '⭐', cat: 'Nature', msg: 'Shiny!', color: 0xffff00, build: builders.star },
    { id: 'heart', name: 'Heart', emoji: '❤️', cat: 'Nature', msg: 'Love!', color: 0xff0000, build: builders.heart },
    { id: 'pinecone', name: 'Pinecone', emoji: '🌲', cat: 'Nature', msg: 'Forest!', color: 0x8b4513, build: builders.pinecone },

    // TOYS
    { id: 'ball', name: 'Ball', emoji: '⚽', cat: 'Toys', msg: 'Bounce!', color: 0xff0000, build: builders.ball },
    { id: 'balloon', name: 'Balloon', emoji: '🎈', cat: 'Toys', msg: 'Up up!', color: 0xff00ff, build: builders.balloon },
    { id: 'kite', name: 'Kite', emoji: '🪁', cat: 'Toys', msg: 'Fly!', color: 0x00ffff, build: builders.kite },
    { id: 'gift', name: 'Gift', emoji: '🎁', cat: 'Toys', msg: 'Surprise!', color: 0x00ffff, build: builders.present },
    { id: 'rocket', name: 'Rocket', emoji: '🚀', cat: 'Toys', msg: 'Blast off!', color: 0xff0000, build: builders.rocket },
    { id: 'car', name: 'Car', emoji: '🚗', cat: 'Toys', msg: 'Vroom!', color: 0x00ff00, build: builders.car },
    { id: 'robot', name: 'Robot', emoji: '🤖', cat: 'Toys', msg: 'Beep boop!', color: 0xffffff, build: builders.robot },
    { id: 'top', name: 'Top', emoji: '🪀', cat: 'Toys', msg: 'Spin!', color: 0x00ff00, build: builders.top },
    { id: 'dice', name: 'Dice', emoji: '🎲', cat: 'Toys', msg: 'Roll!', color: 0xffffff, build: builders.dice },
    { id: 'crown', name: 'Crown', emoji: '👑', cat: 'Toys', msg: 'Royal!', color: 0xffff00, build: builders.crown },

    // TREASURES
    { id: 'coin', name: 'Coin', emoji: '🪙', cat: 'Treasures', msg: 'Rich!', color: 0xffff00, build: builders.coin },
    { id: 'gem', name: 'Gem', emoji: '💎', cat: 'Treasures', msg: 'Shiny!', color: 0x00ffff, build: builders.gem },
    { id: 'trophy', name: 'Trophy', emoji: '🏆', cat: 'Treasures', msg: 'Winner!', color: 0xffff00, build: builders.trophy },
    { id: 'key', name: 'Key', emoji: '🔑', cat: 'Treasures', msg: 'Unlock!', color: 0xffff00, build: builders.key },
    { id: 'lantern', name: 'Lantern', emoji: '🏮', cat: 'Treasures', msg: 'Glow!', color: 0xff0000, build: builders.lantern },
    { id: 'potion', name: 'Potion', emoji: '🧪', cat: 'Treasures', msg: 'Magic brew!', color: 0xff00ff, build: builders.potion },
    { id: 'chest', name: 'Chest', emoji: '📦', cat: 'Treasures', msg: 'Loot!', color: 0x8b4513, build: builders.chest },
    { id: 'ring', name: 'Ring', emoji: '💍', cat: 'Treasures', msg: 'Precious!', color: 0xffff00, build: builders.ring },
    { id: 'diamond', name: 'Diamond', emoji: '💠', cat: 'Treasures', msg: 'Fancy!', color: 0x00ffff, build: builders.diamond },
    { id: 'medal', name: 'Medal', emoji: '🥇', cat: 'Treasures', msg: 'Champion!', color: 0xffff00, build: builders.medal },

    // PETS / ANIMAL
    { id: 'egg', name: 'Egg', emoji: '🥚', cat: 'Animals', msg: 'Crack!', color: 0xffffff, build: builders.egg },
    { id: 'bone', name: 'Bone', emoji: '🦴', cat: 'Animals', msg: 'Woof!', color: 0xffffff, build: builders.bone },
    { id: 'fish', name: 'Fish', emoji: '🐟', cat: 'Animals', msg: 'Glub glub!', color: 0x00ffff, build: builders.fish },
    { id: 'butterfly', name: 'Butterfly', emoji: '🦋', cat: 'Animals', msg: 'Flutter!', color: 0xff00ff, build: builders.butterfly },
    { id: 'bee', name: 'Bee', emoji: '🐝', cat: 'Animals', msg: 'Bzzzz!', color: 0xffff00, build: builders.bee },
    { id: 'snail', name: 'Snail', emoji: '🐌', cat: 'Animals', msg: 'Slow!', color: 0x8b4513, build: builders.snail },
    { id: 'frog', name: 'Frog', emoji: '🐸', cat: 'Animals', msg: 'Ribbit!', color: 0x00ff00, build: builders.frog },
    { id: 'pawprint', name: 'Paw Print', emoji: '🐾', cat: 'Animals', msg: 'Pawsome!', color: 0xffffff, build: builders.pawprint },
  ];

  // Map for easy access
  window.ITEMS_LIST = catalog;
  window.ITEMS = {};
  catalog.forEach(item => {
    // BLUE CONTRAST GLOW
    item.glow = 0x4444ff;
    item.popColors = [0xffffff, 0x00ffff, 0x4444ff];
    window.ITEMS[item.id] = item;
  });

})();
