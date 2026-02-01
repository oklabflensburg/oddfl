function start_animation() {
  const width = window.innerWidth
  const height = window.innerHeight
  const numDots = 10
  const perspective = 600
  const baseScale = 3
  const maxOffset = 2000

  const centerX = width / 2
  const centerY = height / 2

  const svg = document.getElementById('scene')
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`)
  svg.setAttribute('width', width)
  svg.setAttribute('height', height)

  const PATH_1 = `
    M512.001,1024C794.781,1024 1024,794.78 1024,512.001C1024,229.241 794.781,0 512.001,0C229.241,0 0,229.241 0,512.001C0,794.78 229.241,1024 512.001,1024ZM512.001,888.757C720.086,888.757 888.757,720.086 888.757,512.001C888.757,303.916 720.086,135.246 512.001,135.246C303.916,135.246 135.246,303.916 135.246,512.001C135.246,720.086 303.916,888.757 512.001,888.757Z
  `

  const PATH_2 = `
    M959.75,549.14C989.026,533.04 989.026,490.97 959.75,474.871L105.06,5.296C76.822,-10.21 42.293,10.21 42.293,42.431L42.293,981.58C42.293,1013.8 76.822,1034.22 105.06,1018.72L959.75,549.14ZM677.798,530.35C691.927,522.194 691.927,501.816 677.798,493.66L217.057,227.638C202.927,219.503 185.282,229.693 185.282,245.983L185.282,778.006C185.282,794.318 202.927,804.507 217.057,796.351L677.798,530.35Z
  `

  const dots = []

  // create SVG paths
  for (let i = 0; i < numDots; i++) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute('d', i % 2 === 0 ? PATH_1 : PATH_2)
    path.setAttribute('fill', 'currentColor')
    path.setAttribute('fill-rule', 'evenodd')
    if (i % 2 !== 0) {
      path.classList.add('form-2')
    }
    svg.appendChild(path)

    dots.push({
      x: (Math.random() - 0.5) * maxOffset,
      y: (Math.random() - 0.5) * maxOffset,
      z: (Math.random() - 0.5) * maxOffset,
      el: path
    })
  }

  function rotate(dot, ax, ay, az) {
    const sinX = Math.sin(ax), cosX = Math.cos(ax)
    const sinY = Math.sin(ay), cosY = Math.cos(ay)
    const sinZ = Math.sin(az), cosZ = Math.cos(az)

    // X
    let y = dot.y * cosX - dot.z * sinX
    let z = dot.y * sinX + dot.z * cosX
    dot.y = y
    dot.z = z

    // Y
    let x = dot.x * cosY + dot.z * sinY
    z = -dot.x * sinY + dot.z * cosY
    dot.x = x
    dot.z = z

    // Z
    x = dot.x * cosZ - dot.y * sinZ
    y = dot.x * sinZ + dot.y * cosZ
    dot.x = x
    dot.y = y
  }

  function animate() {
    for (const dot of dots) {
      rotate(dot, 0.001, 0.0008, 0.0005)

      const scale = perspective / (perspective + dot.z)
      const screenX = centerX + dot.x * scale - 500
      const screenY = centerY + dot.y * scale
      const s = baseScale * scale

      dot.el.style.transform =
        `translate(${screenX}px, ${screenY}px) scale(${s})`
      dot.el.style.transformOrigin = '0 0'
    }

    requestAnimationFrame(animate)
  }

  animate() // start the animation
}