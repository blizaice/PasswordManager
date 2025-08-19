;(async function() {


async function TOTP(Secret) {
const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"
Secret = Secret.replace(/=+$/, "").toUpperCase()
let bits = 0, val = 0, bytes = []

for (const ch of Secret) {
const idx = ALPHA.indexOf(ch)
if (idx < 0) continue
val = (val << 5) | idx
bits += 5
if (bits >= 8) {
bits -= 8
bytes.push((val >> bits) & 0xff)}}

if (bytes.length === 0) {console.error("Invalid Secret")}
const key = new Uint8Array(bytes)
const counter = Math.floor(Date.now() / 1000 / 30)
const buf = new ArrayBuffer(8)
const view = new DataView(buf)

if (typeof view.setBigUint64 === "function") {
view.setBigUint64(0, BigInt(counter))}
else {
view.setUint32(0, Math.floor(counter / 2 ** 32))
view.setUint32(4, counter >>> 0)}

const cryptoKey = await crypto.subtle.importKey("raw", key, {name: "HMAC", hash: {name: "SHA-1"}}, false, ["sign"])
const sig = new Uint8Array(await crypto.subtle.sign({name: "HMAC"}, cryptoKey, buf))
const off = sig[sig.length - 1] & 0x0f
return ((((sig[off] & 0x7f) << 24) | ((sig[off + 1] & 0xff) << 16) | ((sig[off + 2] & 0xff) << 8) | (sig[off + 3] & 0xff)) % (10 ** 6)).toString().padStart(6, "0")}


;(await (await fetch("./.json")).json()).forEach(async function(Conturi) {

const {Name, Website, Email, Note, Secret, Password} = Conturi

if (!Website) {return}

const Cont = document.createElement("div")
document.body.appendChild(Cont)
Cont.className = "Cont"
Cont.innerHTML = `
<img src="./Images/${Website}.png" onerror="this.onerror=function() {this.src='./Images/Default.png'}; this.src='https://${Website}/favicon.ico'">
<div class="Info">
<h1>${Name} (${Website})</h1>
<p>${Email}</p>
</div>`

const Detalii = document.createElement("div")
document.body.appendChild(Detalii)
Detalii.className = "Detalii Centralizat"

const Continut = document.createElement("div")
Detalii.appendChild(Continut)
Continut.className = "Continut"

Continut.insertAdjacentHTML("beforeend", `
<div class="Centralizat">
<img src="./Images/${Website}.png" onerror="this.onerror=function() {this.src='./Images/Default.png'}; this.src='https://${Website}/favicon.ico'">
<div style="height: 8px"></div>
<a href="https://${Website}">${Website}</a>

</div>

<div style="width: 100%; height: 10px"></div>

<h3>Name</h3><input placeholder="-" value="${Name}" onfocus="this.select()">
<div style="width: 100%; height: 10px"></div>

<h3>Email</h3><input placeholder="-" value="${Email}" onfocus="this.select()">
<div style="width: 100%; height: 10px"></div>

<h3>Password</h3><input placeholder="-" value="${Password}" onfocus="this.select()">
<div style="width: 100%; height: 10px"></div>

<h3>2FA Code</h3>`)

const Cod = document.createElement("input")
Cod.placeholder = "-"
Cod.onfocus = function() {Cod.select()}
Continut.appendChild(Cod)

const Timp = document.createElement("p")
Timp.style.color = "var(--Mov)"
Timp.innerText = "-"
Continut.appendChild(Timp)

if (Secret) {setInterval(async function() {
Timp.innerText = 30 - (Math.floor(Date.now() / 1000) % 30)
Cod.value = await (TOTP(Secret))}, 1000)}

Continut.insertAdjacentHTML("beforeend", `
<div style="width: 100%; height: 10px"></div>
<h3>Note</h3><p>${Note || "-"}</p>`)

const Inchide = document.createElement("button")
Detalii.appendChild(Inchide)
Inchide.innerText = "Close"
Inchide.style.marginTop = "40px"

Cont.onclick = function() {
Detalii.classList.add("DetaliiDeschis")}

Inchide.onclick = function() {
Detalii.classList.remove("DetaliiDeschis")}


})


})()