// items-lib.js
// Procedural Three.js Models for Bluey & Bingo Challenges
// No external downloads needed - all generated with primitives!

(function () {
  const M = {
    // Basic Materials
    red: new THREE.MeshStandardMaterial({ color: 0xff3333, roughness: 0.6 }),
    green: new THREE.MeshStandardMaterial({ color: 0x33cc33, roughness: 0.8 }),
    blue: new THREE.MeshStandardMaterial({ color: 0x3366ff, roughness: 0.5 }),
    yellow: new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.7 }),
    orange: new THREE.MeshStandardMaterial({ color: 0xff8800, roughness: 0.6 }),
    purple: new THREE.MeshStandardMaterial({ color: 0x9933ff, roughness: 0.5 }),
    pink: new THREE.MeshStandardMaterial({ color: 0xff66bb, roughness: 0.6 }),
    white: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 }),
    brown: new THREE.MeshStandardMaterial({ color: 0x8b4513, roughness: 0.9 }),
    black: new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 }),
    gold: new THREE.MeshStandardMaterial({ color: 0xffbb00, roughness: 0.3, metalness: 0.8 }),
    silver: new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.3, metalness: 0.8 }),
    gem: new THREE.MeshStandardMaterial({ color: 0x00ffff, roughness: 0.1, transparent: true, opacity: 0.8, metalness: 0.5 }),
    wood: new THREE.MeshStandardMaterial({ color: 0xa0522d, roughness: 1.0 }),
    biscuit: new THREE.MeshStandardMaterial({ color: 0xeebb77, roughness: 0.9 }),
    choc: new THREE.MeshStandardMaterial({ color: 0x3e1800, roughness: 0.9 }),
    stem: new THREE.MeshStandardMaterial({ color: 0x228b22, roughness: 0.9 }),
  };

  // Helper to build compound items
  function buildGroup() {
    return new THREE.Group();
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
      gem.position.set(0, 0, 0.25); g.add(gem);
      return g;
    }
  };

  // --- CATALOG ---
  // A catalog of 50 items leveraging variants of the builders
  const catalog = [
    // FOOD
    { id: 'biscuit', name: 'Chocolate Biscuit', emoji: '🍪', cat: 'Food', msg: 'Yum!', color: 0xeebb77, build: builders.biscuit },
    { id: 'apple', name: 'Red Apple', emoji: '🍎', cat: 'Food', msg: 'Crunchy!', color: 0xff3333, build: builders.apple },
    { id: 'banana', name: 'Banana', emoji: '🍌', cat: 'Food', msg: 'Monkey time!', color: 0xffcc00, build: builders.banana },
    { id: 'carrot', name: 'Carrot', emoji: '🥕', cat: 'Food', msg: 'What\'s up doc?', color: 0xff8800, build: builders.carrot },
    
    // NATURE
    { id: 'flower_pink', name: 'Pink Flower', emoji: '🌸', cat: 'Nature', msg: 'So pretty!', color: 0xff66bb, build: () => builders.flower(M.pink) },
    { id: 'flower_red', name: 'Red Flower', emoji: '🌺', cat: 'Nature', msg: 'Lovely!', color: 0xff3333, build: () => builders.flower(M.red) },
    { id: 'flower_sun', name: 'Sunflower', emoji: '🌻', cat: 'Nature', msg: 'Sunny!', color: 0xffcc00, build: () => builders.flower(M.yellow) },
    { id: 'mushroom', name: 'Mushroom', emoji: '🍄', cat: 'Nature', msg: 'Fungi!', color: 0xff3333, build: builders.mushroom },
    
    // TOYS
    { id: 'ball_red', name: 'Red Ball', emoji: '🔴', cat: 'Toys', msg: 'Bounce!', color: 0xff3333, build: () => builders.ball(M.red) },
    { id: 'ball_blue', name: 'Blue Ball', emoji: '🔵', cat: 'Toys', msg: 'Catch!', color: 0x3366ff, build: () => builders.ball(M.blue) },
    { id: 'ball_green', name: 'Green Ball', emoji: '🟢', cat: 'Toys', msg: 'Throw it!', color: 0x33cc33, build: () => builders.ball(M.green) },
    { id: 'ball_yellow', name: 'Yellow Ball', emoji: '🟡', cat: 'Toys', msg: 'Rolland roll!', color: 0xffcc00, build: () => builders.ball(M.yellow) },
    
    // TREASURES
    { id: 'coin', name: 'Gold Coin', emoji: '🪙', cat: 'Treasures', msg: 'Rich!', color: 0xffbb00, build: builders.coin },
    { id: 'gem', name: 'Magic Gem', emoji: '💎', cat: 'Treasures', msg: 'Shiny!', color: 0x00ffff, build: builders.gem },
    { id: 'star_gold', name: 'Gold Star', emoji: '⭐', cat: 'Treasures', msg: 'Superstar!', color: 0xffcc00, build: builders.star },
    { id: 'star_glow', name: 'Glowing Star', emoji: '🌟', cat: 'Treasures', msg: 'It glows!', color: 0xffffff, build: builders.star },
    { id: 'present', name: 'Present', emoji: '🎁', cat: 'Treasures', msg: 'Surprise!', color: 0x3366ff, build: builders.present },
    { id: 'crown', name: 'Crown', emoji: '👑', cat: 'Treasures', msg: 'Royal!', color: 0xffbb00, build: builders.crown },
    
    // PETS / ANIMAL
    { id: 'bone', name: 'Dog Bone', emoji: '🦴', cat: 'Animals', msg: 'Woof!', color: 0xffffff, build: builders.bone },
  ];

  // Map for easy access
  window.ITEMS_LIST = catalog;
  window.ITEMS = {};
  catalog.forEach(item => {
    window.ITEMS[item.id] = item;
  });

})();
