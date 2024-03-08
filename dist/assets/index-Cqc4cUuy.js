(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const n=[{id:3,nombre:"Mahou Cinco Estrellas",tipo:"Lager",origen:"Madrid",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://www.loscervecistas.es/wp-content/uploads/2021/10/mahou-cinco-estrellas-213770.png"},{id:22,nombre:"Estrella Galicia",tipo:"Lager",origen:"Galicia",descripcion:"Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.",imagen:"https://estrellagalicia00.es/wp-content/uploads/2021/06/botella_estrella_galicia_00.png"},{id:33,nombre:"Alhambra Reserva 1925",tipo:"Lager",origen:"Granada",descripcion:"Cerveza rubia con un sabor ligeramente dulce y toques de caramelo.",imagen:"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202204/04/00118602800916____3__600x600.jpg"},{id:34,nombre:"San Miguel Especial",tipo:"Lager",origen:"Barcelona",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://www.sanmiguel.com/es/wp-content/uploads/sites/2/2021/01/san-miguel-gluten-free-4.png"},{id:35,nombre:"Damm Estrella",tipo:"Lager",origen:"Barcelona",descripcion:"Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.",imagen:"https://static.damm.com/sites/default/files/config-page/estrella_header_logo/estrella-damm_0.png"}],c={template:`
    <h1 class="text-center mb-5 ">----- Vista usuario -----</h1>
    <div class="row">
        
        <div class="col-6">
            <h3>Grupo</h3>
            <label for="nombreGrupo" class="label-control">Nombre del grupo:</label>
            <input type="text" class="form-control mt-2" placeholder ="Borrachos de DAW2">
            <label for="numeroMesa" class="label-control">Mesa numero</label>
            <input id="numeroMesa" type="number" class="form-control mt-2" placeholder ="0">
            
            <h3 class="mt-5">Haz tu pedido</h3>
            <div class="d-flex gap-3 ">
                <select name="cervezas" id="cervezas" class="form-control">
                    <option value="">Selecciona qué birra quieres</option>
                </select>
            
                <input id="cantidad" type="number" value="0" class="form-control">
            </div>
            <button id="añadirPedido" class="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
        </div>
        <div class="col-6 border ">
            <div class="p-3 d-flex">
                <div class="w-50">
                    <img id="imagen" src="" alt="" class="w-100" style="max-width: 90%; max-height: 90%;">
                </div>
                <div>
                    <h4 id="nombre" class="">Estrella Galicia</h4>
                    <p id="descripcion">Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.</p>
                </div>
            </div>
        </div>
    </div>
    `,script:()=>{const o=document.querySelector("#cervezas");n.forEach(t=>{const r=document.createElement("option");r.text=t.nombre,r.value=t.id,o.appendChild(r)}),o.addEventListener("change",()=>{const t=n.find(r=>r.id==o.value);t&&(document.querySelector("#nombre").innerHTML=t.nombre,document.querySelector("#descripcion").innerHTML=t.descripcion,document.querySelector("#imagen").src=t.imagen)})}},d={template:`
    <div class="row">
        <h1 class="text-center mb-5 ">----- Vista camareros -----</h1>
        <h3>Pedidos</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Grupo</th>
                    <th>Mesa</th>
                    <th>Cerveza</th>
                    <th>Cantidad</th>
                    <th>Estado</th>
                </tr>        
            </thead>
            
            <tbody id="enviarPedidos">
            
            </tbody>
        </table>
    </div>



   
    `,script:()=>{}},l={template:`
    <div id="formPedido" class="container mt-3 p-5 border shadow-lg "></div>
    <div id="tablaPedidos" class="container mt-5 mb-5 p-5 border shadow-lg"></div>
    `,script:()=>{document.querySelector("#formPedido").innerHTML=c.template,c.script(),document.querySelector("#tablaPedidos").innerHTML=d.template}},m={template:'<p class="text-white">Oscar Montilla</p>'};document.querySelector("header").innerHTML=m.template;document.querySelector("main").innerHTML=l.template;l.script();
