 // Datos simples de ejemplo
    let carrito = [];
    let total = 0;

    const productos = [
      { nombre: "Baño", precio: 30 },
      { nombre: "Juguete", precio: 15 },
      { nombre: "Galletas", precio: 10 }
    ];

    // LOGIN 
    // Para que el login funcione debe poner en usuario "admin"
    // Para la contraseña debe poner "123"
    function iniciarSesion() {
      const u = document.getElementById("user").value;
      const p = document.getElementById("pass").value;

      if (u === "admin" && p === "123") {
        document.getElementById("login").style.display = "none";
        document.getElementById("nav").style.display = "flex";
        mostrar("registro");
        cargarCatalogo();
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    }

    function cerrarSesion() {
      location.reload();
    }

    // MOSTRAR MÓDULOS
    function mostrar(id) {
      document.querySelectorAll('.modulo').forEach(m => m.style.display = "none");
      document.getElementById(id).style.display = "block";
    }

    // REGISTRAR DATOS
    function guardarDuenio() {
      alert("Dueño registrado correctamente.");
    }

    function guardarMascota() {
      alert("Mascota registrada correctamente.");
    }

    // AGENDA 
    function guardarCita() {
      const fecha = document.getElementById("fecha").value;
      const hora = document.getElementById("hora").value;
      const mascota = document.getElementById("mascotaServicio").value;
      const servicio = document.getElementById("servicio").value;

      const div = document.createElement("div");
      div.className = "card";
      div.textContent = `${fecha} - ${hora} - ${mascota} - ${servicio}`;

      document.getElementById("listaCitas").appendChild(div);
      alert("Cita agendada!");
    }

    // CARRITO
    function cargarCatalogo() {
      const cont = document.getElementById("catalogo");
      cont.innerHTML = "";

      productos.forEach((p, i) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `${p.nombre} - ${p.precio} Bs <br>
        <button onclick="agregar(${i})">Comprar</button>`;

        cont.appendChild(card);
      });
    }

    function agregar(i) {
      carrito.push(productos[i]);
      total += productos[i].precio;
      actualizarCarrito();
    }

    function actualizarCarrito() {
      const cont = document.getElementById("listaCarrito");
      cont.innerHTML = "";

      carrito.forEach(p => {
        const div = document.createElement("div");
        div.className = "card";
        div.textContent = `${p.nombre} - ${p.precio} Bs`;
        cont.appendChild(div);
      });

      document.getElementById("total").textContent = total;
    }