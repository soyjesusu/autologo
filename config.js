// ÚNICO archivo a editar: datos del estudio, servicios, horario y Firebase.
// Si apiKey está vacío, el sitio funciona en MODO DEMO (reservas solo en memoria).
export const firebaseConfig = { apiKey: "AIzaSyC7vo6Ck9jfPVSLpbRwDY3LdZoz_q2RAAc", authDomain: "autologo-22ed8.firebaseapp.com", projectId: "autologo-22ed8", appId: "1:465834794532:web:144e48655691d536c242b1" };

export const ESTUDIO = {
  nombre: "Centro de Atención Integral Autólogo",
  lema: "Tratamientos autólogos, estéticos y de bienestar en un solo centro",
  whatsapp: "04125181472",
  whatsappAgenda: "04125181472",   // WhatsApp de la administradora (04125181472): recibe la agenda del día para reenviarla al profesional
  instagram: "",   // escribir el @ real para que aparezca en el sitio
  direccion: "Caracas, Venezuela",
  horarioTexto: "Lunes a sábado, 9:00 a.m. a 6:00 p.m."
};

// dias: 0=domingo ... 6=sábado. Cuadrícula de 30 min.
export const HORARIO = { dias: [1, 2, 3, 4, 5, 6], desde: "09:00", hasta: "18:00" };
export const PASO = 30;

export const CATEGORIAS = ["Rostro y piel", "Cuerpo", "Relax y bienestar", "Rehabilitación"];

// img: ruta de la foto, por ejemplo "limpieza.jpg" (subir a la carpeta img). Vacío = sin foto.
// min = duración en minutos (propuesta, ajustar). precio "" = se muestra "Consultar".
export const SERVICIOS = {
  limpieza:   { cat: "Rostro y piel", nombre: "Limpieza facial", desc: "Limpieza profunda para renovar y equilibrar la piel.", min: 60, precio: "", img: "facial.jpg" },
  prp:        { cat: "Rostro y piel", nombre: "Plasma rico en plaquetas", desc: "Tratamiento autólogo que estimula la regeneración de la piel.", min: 60, precio: "", img: "" },
  vitamino:   { cat: "Rostro y piel", nombre: "Vitaminoterapia", desc: "Aporte de vitaminas y nutrientes para revitalizar la piel.", min: 45, precio: "", img: "" },
  verrugas:   { cat: "Rostro y piel", nombre: "Eliminación de verrugas", desc: "Retiro de verrugas de forma segura y localizada.", min: 30, precio: "", img: "" },
  hidrolipo:  { cat: "Cuerpo", nombre: "Hidrolipoclasia", desc: "Reducción de grasa localizada.", min: 60, precio: "", img: "" },
  enzimas:    { cat: "Cuerpo", nombre: "Aplicación de enzimas localizadas", desc: "Enzimas aplicadas en zonas específicas del cuerpo.", min: 45, precio: "", img: "" },
  reductor:   { cat: "Cuerpo", nombre: "Masajes reductores", desc: "Masaje corporal para moldear y reducir medidas.", min: 60, precio: "", img: "masaje.jpg" },
  drenaje:    { cat: "Cuerpo", nombre: "Drenaje linfático", desc: "Movimiento suave de líquidos para desinflamar y aliviar la retención.", min: 60, precio: "", img: "masaje.jpg" },
  descontrac: { cat: "Relax y bienestar", nombre: "Masaje descontracturante", desc: "Alivia tensión y contracturas musculares.", min: 60, precio: "", img: "masaje.jpg" },
  antistress: { cat: "Relax y bienestar", nombre: "Masaje anti stress y relajante", desc: "Masaje para soltar el cuerpo y descansar la mente.", min: 60, precio: "", img: "masaje.jpg" },
  pediluvio:  { cat: "Relax y bienestar", nombre: "Pediluvio iónico", desc: "Baño de pies iónico para relajar y desintoxicar.", min: 45, precio: "", img: "" },
  rehab:      { cat: "Rehabilitación", nombre: "Rehabilitación física", desc: "Sesiones guiadas de recuperación. Requiere informe médico previo.", min: 60, precio: "", img: "" }
};

export const ymd = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
export const tel58 = t => { let d = (t || "").replace(/\D/g, ""); if (d.startsWith("0")) d = d.slice(1); return d.startsWith("58") ? d : "58" + d; };
export const toMin = h => { const [a, b] = h.split(":").map(Number); return a * 60 + b; };
export const hm = m => String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0");
// Bloques de 30 min que ocupa un servicio que empieza a la hora h
export const bloques = (h, dur) => { const o = [], s = toMin(h); for (let m = s; m < s + dur; m += PASO) o.push(hm(m)); return o; };
// Horas de inicio posibles para un servicio de dur minutos
export const inicios = dur => { const o = []; for (let m = toMin(HORARIO.desde); m + dur <= toMin(HORARIO.hasta); m += PASO) o.push(hm(m)); return o; };

// FOTOS: subir los archivos a la carpeta img y escribir aquí las rutas.
export const HERO_IMG = "portada.jpg";   // foto de fondo de la portada, ej: "portada.jpg"
export const GALERIA = [];    // ej: ["g1.jpg","g2.jpg","g3.jpg","g4.jpg"]
export const CREDITOS = "Imágenes: Freepik";   // ajustar según la licencia/atribución exigida; dejar "" si no aplica
