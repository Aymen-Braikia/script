// (function () {

const emerald = {
	EmePos: {
		1: { x: 219, y: 282 },
		2: { x: 220, y: 288 },
		3: { x: 214, y: 287 },
	},
	standPos: {
		1: { x: 219, y: 283 },
		2: { x: 219, y: 287 },
		3: { x: 215, y: 287 },
	},
	i: 1,
};

const window2 = window.window2 || {},
	chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ_0123456789",
	log = window2.log || console.log,
	settings = {
		PlayerOnTop: { enabled: true, draw: false },
		BoxOnTop: { enabled: true, draw: false },
		ChestOnTop: { enabled: true, draw: false },
		TotemOnTop: { enabled: true, draw: false },
		// TreasureOnTop: { enabled: true, draw: false },
		ShowHP: { enabled: true, draw: false },
		blizard: { enabled: true, draw: false },
		sandstorm: { enabled: true, draw: false },
		Timers: { enabled: true, draw: false, increamenter: 0.02, globalAlpha: 1 },
		Roofs: { enabled: true, draw: false },
		NoFog: { enabled: true, draw: false },
		ColoredSpikes: { enabled: true, draw: false },
		ListEnabledHacks: { enabled: true, draw: false },
		PutThatMuch: { enabled: false, amount: 10, draw: false },
		ChestInfo: { enabled: true, draw: false },
		BoxInfo: { enabled: true, draw: false },
		TotemInfo: { enabled: true, draw: false },
		MachineInfo: { enabled: true, draw: false },
		enable: false,
		ExtractorInfo: { enabled: true, draw: false },
		BuildsInfo: { enabled: true, draw: false },
		WeatherInfo: { enabled: true, draw: false },
		JoinLeaves: { enabled: true, join: [], leave: [], draw: false },
		Xray: { enabled: false, draw: true, key: "KeyZ", keyMode: "press" },

		AutoExtractorTake: { enabled: false, draw: true, key: "Numpad2", keyMode: "press" },
		AutoExtractorPut: { enabled: false, draw: true, key: "Numpad1", keyMode: "press" },
		AutoBreadTake: { enabled: false, draw: true, key: "Numpad4", keyMode: "press" },
		AutoBreadPut: { enabled: false, draw: true, key: "Numpad3", keyMode: "press" },
		AutoPilot: { enabled: true, draw: false },
		AutoFeed: { enabled: true, draw: false },
		AutoIce: { enabled: false, draw: true },
		AutoBook: { enabled: true, draw: false },
		AutoBuild: { enabled: false, draw: true, key: "KeyT", keyMode: "press", build: "Bridges" },
		AutoFire: { enabled: false, draw: true, key: "KeyX", keyMode: "hold" },
		AutoRespawn: { enabled: true, draw: false },
		AutoTotem: { enabled: false, draw: true, key: "KeyJ", keyMode: "press" },
		AutoSeed: { enabled: false, draw: true, key: "NONE", keyMode: "press", seed: "Berry" },
		AutoTame: { enabled: false, draw: true, key: "KeyI", keyMode: "press", angle: null },
		AutoCrown: { enabled: false, draw: true },

		DropSword: { enabled: false, draw: true, key: "KeyV", keyMode: "hold" },

		AutoSpike: { enabled: false, draw: true, key: "Space", keyMode: "hold", priority: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall"], mode: true },

		AutoSteal: { enabled: false, draw: true, key: "KeyQ", keyMode: "hold", unlock: false },

		AutoFarm: { enabled: false, draw: true, water: false, key: "Numpad5", keyMode: "press", angle: null, x: 0, y: 0, xx: 0, yy: 0, sx: 0, sy: 0 },
		AutoEmerald: { enabled: false, draw: true, key: "Numpad6", keyMode: "press", angle: null },

		AutoCraft: { enabled: false, draw: true, key: "KeyK", keyMode: "press", last: null },
		AutoRecycle: { enabled: false, draw: true, key: "KeyL", keyMode: "press", last: null },

		AimBot: { enabled: false, draw: true, key: "KeyF", keyMode: "press", angle: null, drawAngle: () => {} },

		Spectator: { enabled: false, draw: true, key: "KeyE", keyMode: "press", speed: 0.5 },

		PlayerTracers: { enabled: false, draw: false },
		KrakenTracers: { enabled: false, draw: false },
		SandwormTracers: { enabled: false, draw: false },
		SpiderTracers: { enabled: false, draw: false },
		WolfTracers: { enabled: false, draw: false },
		RabbitTracers: { enabled: false, draw: false },
		VultureTracers: { enabled: false, draw: false },
		BabyDragonTracers: { enabled: false, draw: false },
		BabyLavaDragonTracers: { enabled: false, draw: false },

		TokenJoiner: {
			enabled: false,
			token: null,
			token_id: null,
		},
		// sharedUnits: null,

		nows: {
			autoextractortake: Date.now(),
			autoextractorput: Date.now(),
			autobreadtake: Date.now(),
			autobreadput: Date.now(),
			autocraft: Date.now(),
			autorecycle: Date.now(),
			autosteal: Date.now(),
			autobuild: Date.now(),
			autofire: Date.now(),
			autototem: Date.now(),
			autoseed: Date.now(),
			autotame: Date.now(),
			autocrown: Date.now(),
			autospike: Date.now(),
			autofarm: Date.now(),
			autoemerald: Date.now(),
			dropsword: Date.now(),
			updateInv: Date.now(),
			joinleaves: Date.now(),
		},
	},
	vars = {
		connect3: null,
		connect2: null,
		nickname: null,
		fly: null,
		src: null,
		auto_feed: null,
		custormWorld: null,
		clothe: null,
		hit: null,
		hitten: null,
		AC: null,
		change: null,
		fast_units: null,
		decodeVar1: null,
		decodeVar2: null,
		decodePacket: null,
		socket: null,
		drawUI: null,
		players: null,
		units: null,
		inv: null,
		can_select: null,
		n: null,
		chat: null,
		terminal: null,
		cam: null,
		team: null,
		pid: null,
		token_id: null,
		token: null,
		draw: null,
		skin: null,
		accessory: null,
		bag: null,
		book: null,
		// ghost: "ΔΔᐃⲆΔ",
		// reborn: "ⵠⵠⵠⵠΔᐃⵠⵠΔ",
	};

let lastTime = performance.now();
let frames = 0;
let fps = 0;

function updateFPS(now) {
	frames++;
	const delta = now - lastTime;
	if (delta >= 1000) {
		fps = frames;
		frames = 0;
		lastTime = now;
	}

	const ctx = window.ctx || document.querySelector("canvas").getContext("2d");

	if (!ctx) return;
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 6;
	ctx.fillStyle = "white";
	ctx.strokeStyle = "black";
	ctx.font = "35px Baloo Paaji";
	ctx.strokeText(fps + "FPS", innerWidth - 480, 60);
	ctx.fillText(fps + "FPS", innerWidth - 480, 60);
	ctx.restore();
}

function generateToken(len) {
	let tok = "";
	for (let i = 0; i < len; i++) tok += chars[Math.floor(Math.random() * chars.length)];
	return tok;
}

let user, world, client, mouse, keyboard, UI, game, Item, AC;
function hooks() {
	if (!world || !client || !user) requestAnimationFrame(hooks);
	for (const p in window) {
		if (!window[p] || chars.includes(p[0])) continue;

		if (!Item && typeof window[p] == "function" && (window[p].toString().includes("this.type =") || window[p].toString().includes("this.type="))) {
			Item = window[p];

			const flyArr = Item.toString().replaceAll(" ", "").split("=[];this.r={x:")[0].slice(-50).split("=0")[0].split(".");
			vars.fly = flyArr[flyArr.length - 1];

			vars.pid = window[p].toString().split("this.")[2].split("=")[0];
			vars.clothe = Item.toString().split("IDLE")[1].split("this.")[2].split("=")[0];
		}
		if (!client && typeof window[p].connect == "function") {
			client = window[p];
			client.send_move = (move) => client[vars.socket].send(toBinary([packets.move, move]));

			client.connect = new Proxy(client.connect, {
				apply(target, thisArg, args) {
					if (args[0] && args[0][0] == "hold") {
						window[vars.google][vars.googleFunction]().then((tok) => {
							const data = {
								googleRecap: tok,
								socketUrl: client[vars.socket].url.split("?")[0] + "?" + user.ΔⵠⲆⵠᐃⵠⲆ,
								param1: user.ⵠᐃⵠⲆⵠᐃᐃ,
								param2: user.ⵠⵠᐃᐃⲆᐃΔ,
								param3: user.ΔΔⲆⲆΔᐃⲆ,
								token: user[vars.token],
								token_id: user[vars.token_id],
							};

							user.ΔⵠⲆⵠᐃⵠⲆ = undefined;
							user.ⵠᐃⵠⲆⵠᐃᐃ = undefined;
							user.ⵠⵠᐃᐃⲆᐃΔ = undefined;
							user.ΔΔⲆⲆΔᐃⲆ = undefined;

							fetch("http://localhost:8000/hold", {
								headers: {
									"Content-Type": "application/json",
								},
								method: "post",
								body: JSON.stringify(data),
							});

							// const data = {
							// 	googleRecap: tok,
							// 	socketUrl: client[vars.socket].url.split("?")[0] + "?" + user.ΔⵠⲆⵠᐃⵠⲆ,
							// 	param1: user.ⵠᐃⵠⲆⵠᐃᐃ,
							// 	param2: user.ⵠⵠᐃᐃⲆᐃΔ,
							// 	param3: user.ΔΔⲆⲆΔᐃⲆ,
							// 	token: user[vars.token],
							// 	token: user[vars.token_id],
							// };

							// window.socket = new WebSocket(data.socketUrl);
							// socket.binaryType = "arraybuffer";
							// // socket.onopen = client[vars.socket].onopen;
							// socket.onopen = (e) => {
							// 	socket.send(JSON.stringify(["Aymen", 4040, 2360, 52, generateToken(14), generateToken(10), 0, 0, 0, 0, 0, 1, 0, 0, 0, null, user.ΔΔⲆⲆΔᐃⲆ, data.googleRecap, data.param1, data.param2]));
							// };
							// let i = 0;

							// socket.onmessage = (e) => {
							// 	if (typeof e.data == "string") log(e.data.length);
							// 	else {
							// 		i++;
							// 		log(e.data, i);
							// 	}

							// 	// socket.send(JSON.stringify([0, 5580, 22970]));
							// };
							// socket.onclose = (e) => {
							// 	// console.clear();
							// 	log("socket closed");
							// };
							// socket.onerror = (e) => {
							// 	// console.clear();
							// 	log("socket errored: ", e.message);
							// };

							// user.xd1 = user.ΔⵠⲆⵠᐃⵠⲆ;
							// user.xd2 = user.ⵠᐃⵠⲆⵠᐃᐃ;
							// user.xd3 = user.ⵠⵠᐃᐃⲆᐃΔ;
						});
					} else Reflect.apply(target, thisArg, args);
					// return result[0] == 25 ? settings.AutoRespawn.enabled && [] : result;
				},
			});

			// used to hook the google verificator
			const strPart1 = client.constructor.toString().split("onopen")[1].split(".then")[0];
			const strPart2 = strPart1.slice(strPart1.lastIndexOf(";") + 1).replace("()", "");
			vars.google = strPart2.split(".")[0];
			vars.googleFunction = strPart2.split(".")[1];

			const a = client.constructor.toString().replaceAll(" ", "").split(`.id=-1`)[0].slice(-120).split("=[]")[0].split(".");

			vars.can_select = a[a.length - 1];

			vars.update = Object.keys(window).find((e) => typeof window[e] == "function" && window[e].toString().includes("this.type ="));
		}
		if (!world && typeof window[p].transition == "boolean") {
			world = window[p];
			vars.custormWorld = world.constructor.toString().split("this.mode")[1].split("=")[1].split("this.")[1].trim();
		}
		if (!user && typeof window[p].alert == "object" && typeof window[p].reconnect == "object") {
			user = window[p];
			user.ghost = { enabled: false };
			vars.control = Object.keys(user).find((e) => user[e] && user[e].angle == 0);
			vars.update = Object.keys(user[vars.control]).find((e) => typeof user[vars.control][e] == "function");
			vars.fast_units = user[vars.control][vars.update].toString().split("[")[0].split("=")[1].split(".")[1].trim();
			settings.AimBot.drawAngle = user[vars.control][vars.update];
		}
		if (!UI && window[p] && typeof window[p].unlock == "object") UI = window[p];
		if (!game && window[p] && typeof window[p].options == "object") {
			game = window[p];
			for (const e in game) game[e] && typeof game[e].all == "function" && (vars.safe_delete = e);
			for (let e in UI) typeof UI[e] == "function" && UI[e].toString().replaceAll(" ", "").includes(".waiting)&&(") && (vars.connect2 = e);

			vars.connect3 = UI[vars.connect2].toString().split(",")[2].split("(")[0].split(".")[1].trim();
		}
	}
}

hooks();

const SandStormImage = new Image();
SandStormImage.src = "https://raw.githubusercontent.com/XmreLoux/images/main/sandstorm.png";
const BlizzardImage = new Image();
BlizzardImage.src = "https://raw.githubusercontent.com/XmreLoux/images/main/blizzard.png";

let Hack, component;
const UtilsUI = {
	initGUI: () => {
		document.querySelector("#option_in_game").style.opacity = "0.6";
		document.querySelector("#chronoquest").style.opacity = "0.6";
		document.querySelector("#shop_market").style.opacity = "0.6";
		document.querySelector("#home_craft").style.opacity = "0.6";
		document.querySelector("#recipe_craft").style.opacity = "0.6";
		document.querySelector("#sure_delete").style.opacity = "0.6";
		document.querySelector("#cancel_sure_delete").style.opacity = "0.6";
		// gui code

		class gui {
			constructor({ name, width, theme, root }) {
				this.name = name;
				this.width = width;
				this.theme = theme;
				this.root = root;
				this.observed = [];
				this.observed2 = [];
			}

			init() {
				this.container = document.createElement("div");
				this.container.classList.add("mainContainer");
				this.root.appendChild(this.container);

				this.container.style.width = this.width;
				this.container.style.backgroundColor = this.theme.container_bg;
				this.container.style.color = this.theme.text_primary;
				this.container.style.fontFamily = this.theme.font.fontFamily;
				this.container.style.fontSize = this.theme.font.fontSize;

				// this.container.style.backgroundColor = this.theme.secondary;

				const title = document.createElement("h2");

				title.innerHTML = this.name;

				this.container.appendChild(title);

				this.foldersContainer = document.createElement("div");
				this.foldersContentContainer = document.createElement("div");

				this.foldersContainer.classList.add("foldersContainer");
				this.foldersContentContainer.classList.add("foldersContentContainer");

				this.container.appendChild(this.foldersContainer);
				this.container.appendChild(this.foldersContentContainer);

				this.togglerBtn = document.createElement("div");

				this.togglerBtn.classList.add("togglerBtn");

				this.togglerBtn.onclick = (e) => this.container.classList.toggle("none");
				this.root.appendChild(this.togglerBtn);

				this.setCss();
			}

			register(info, settings) {
				const folder = settings ? settings.folder : null;

				if (Array.isArray(info))
					return info.forEach((d) => {
						d.parent = document.querySelector(`.${folder}FolderContent`);
						this.createComponent(d);
					});
				info.parent = document.querySelector(`.${folder}FolderContent`);
				this.createComponent(info);
			}
			createComponent({ type, label, object, property, action, icon, options, parent, value }) {
				switch (type) {
					case "folder":
						const folder = document.createElement("div");
						icon && (folder.innerHTML = icon);
						if (label) {
							const labelText = document.createElement("p");
							labelText.innerHTML = label;
							folder.appendChild(labelText);
						}
						folder.classList.add("folder");

						parent ? parent.appendChild(folder) : this.foldersContainer.appendChild(folder);

						const folderContent = document.createElement("div");
						folderContent.classList.add(`${label.replaceAll("&", "")}FolderContent`);
						folderContent.classList.add(`FolderContent`);

						const folderContentTitle = document.createElement("h3");
						folderContentTitle.innerHTML = label;
						folderContentTitle.classList.add("folderContentTitle");

						folderContent.appendChild(folderContentTitle);

						folder.addEventListener("click", () => {
							folderContent.classList.toggle("active");
							folder.classList.toggle("active");
						});

						this.foldersContentContainer.appendChild(folderContent);

						break;
					case "checkbox":
						const checkboxContainer = document.createElement("div");
						// icon && checkboxContainer.appendChild(icon);
						icon && (checkboxContainer.innerHTML = icon);
						if (label) {
							const labelText = document.createElement("p");
							labelText.innerHTML = label;
							checkboxContainer.appendChild(labelText);
						}

						const checkbox = document.createElement("div");

						checkbox.addEventListener("click", () => {
							object[property] = !object[property];
							checkbox.classList.toggle("active");
						});

						object[property] && checkbox.classList.add("active");
						action && ((checkbox.onclick = action), UtilsUI.saveSettings());

						checkbox.classList.add("cbox");

						this.observed2.push([property, object, checkbox]);

						checkboxContainer.classList.add("checkbox");
						checkboxContainer.appendChild(checkbox);
						parent ? parent.appendChild(checkboxContainer) : this.container.appendChild(checkboxContainer);
						break;

					case "select":
						const selectContainer = document.createElement("div");

						icon && (selectContainer.innerHTML = icon);
						if (label) {
							const labelText = document.createElement("p");
							labelText.innerHTML = label;
							selectContainer.appendChild(labelText);
						}
						const select = document.createElement("select");
						options.forEach((opt) => {
							const option = document.createElement("option");
							option.value = opt;
							option.innerHTML = opt;
							select.appendChild(option);
						});

						action && ((select.onchange = action), UtilsUI.saveSettings());

						value && (select.value = value);

						selectContainer.appendChild(select);

						selectContainer.classList.add("selectContainer");
						parent ? parent.appendChild(selectContainer) : this.container.appendChild(selectContainer);
						break;
					case "text":
						const inputContainer = document.createElement("div");

						icon && (inputContainer.innerHTML = icon);
						if (label) {
							const labelText = document.createElement("p");
							labelText.innerHTML = label;
							inputContainer.appendChild(labelText);
						}
						const input = document.createElement("input");
						input.type = "text";
						input.classList.add("inputText");

						action && (input.addEventListener("input", action), UtilsUI.saveSettings());

						value && (input.value = value);

						inputContainer.appendChild(input);

						inputContainer.classList.add("inputContainer");
						parent ? parent.appendChild(inputContainer) : this.container.appendChild(inputContainer);
						break;

					case "display":
						const display = document.createElement("div");
						// icon && display.appendChild(icon);
						icon && (display.innerHTML = icon);
						if (label) {
							const labelText = document.createElement("p");
							labelText.innerHTML = label;
							display.appendChild(labelText);
						}

						const disp = document.createElement("p");
						disp.innerHTML = String(object[property]);

						this.observed.push([property, object, disp]);

						display.appendChild(disp);

						display.classList.add("display");
						parent ? parent.appendChild(display) : this.container.appendChild(display);
						break;
					case "button":
						const btn = document.createElement("div");
						// icon && btn.appendChild(icon);
						icon && (btn.innerHTML = icon);

						const labelText = document.createElement("p");
						labelText.innerHTML = label;
						btn.appendChild(labelText);

						action && ((btn.onclick = action), UtilsUI.saveSettings());

						btn.classList.add("btn");
						parent ? parent.appendChild(btn) : this.container.appendChild(btn);
						break;
					case "range":
						const rangeContainer = document.createElement("div");
						rangeContainer.classList.add("rangeContainer");

						if (label) {
							const labelText = document.createElement("p");
							labelText.innerHTML = label;
							rangeContainer.appendChild(labelText);
						}

						const range = document.createElement("input");
						range.type = "range";

						range.min = options.min;
						range.max = options.max;
						range.step = options.step;

						range.value = object[property];

						range.addEventListener("input", action);

						rangeContainer.appendChild(range);

						parent ? parent.appendChild(rangeContainer) : this.container.appendChild(rangeContainer);
						break;

					default:
						break;
				}
			}
			setCss() {
				const css = document.createElement("style");
				css.innerHTML =
					`:root {--transition: .3s ease;--bg_primary: ${this.theme.bg_primary};--bg_secondary: ${this.theme.bg_secondary};--text_primary: ${this.theme.text_primary};--text_secondary: ${this.theme.text_secondary};}` +
					`.togglerBtn {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: 0;
    width: 16px !important;
    height: 16px !important;
    background-color: var(--bg_primary);
    border: 3px solid var(--text_primary);
    transition: var(--transition);
    z-index: 10;
    cursor: pointer;
}

.togglerBtn:hover {
    background-color: var(--text_primary);
}

.foldersContentContainer {
    width: 100%;
    max-height: calc(100dvh - 192px);
    overflow-y: auto;
}

.foldersContentContainer::-webkit-scrollbar {
    /* appearance: none; */
    width: 10px;
    background-color: var(--text_primary);
}

.foldersContentContainer::-webkit-scrollbar-thumb {
    background-color: var(--text_secondary);
}


.none {
    display: none !important;
}

.mainContainer {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
    z-index: 9;
    user-select: none;
}

.mainContainer>* {
    width: 100%;
}

.mainContainer>h2 {
    text-align: center;
}

.mainContainer p,
.mainContainer h2 {
    margin: 0;
    padding: 0;
}

.foldersContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
}

.folder {
    text-align: center;
    padding: 10px;
    transition: var(--transition);
    cursor: pointer;
}

.folder.active,
.folder:hover {
    background-color: var(--bg_secondary);
    color: var(--text_secondary);
}

.FolderContent {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 5 40px;
    transition: var(--transition);
    overflow: hidden;
}

.FolderContent.active {
    display: flex !important;
}

.FolderContent>* {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.FolderContentTitle {
    margin: 0;
    text-decoration: underline;
}

.cbox {
    box-sizing: border-box;
    display: flex;
    width: 16px;
    height: 16px;
    background-color: var(--bg_primary);
    border: 3px solid var(--text_primary);
    transition: var(--transition);
    cursor: pointer;
}

.cbox.active {
    background-color: var(--text_secondary);
}

.selectContainer select {
    background-color: var(--bg_primary);
    font-size: 20px;
    color: var(--text_primary);
    outline: none;
    border: unset;
    border-bottom: 3px solid currentColor;
    font-family: "Baloo Paaji";
    min-width: 200px;
}

.btn {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.btn>p {
    padding: 5px 15px;
    min-width: 300px;
    text-align: center;
    cursor: pointer;
    margin: 0;
    background-color: var(--bg_primary);
    transition: var(--transition);
}

.btn>p:hover {
    background-color: var(--bg_secondary);
}

.rangeContainer input[type=range] {
    appearance: none;
    width: 350px;
    height: 10px;
    background: var(--text_primary);
    border-radius: 5px;
    outline: none;
}


.rangeContainer input[type=range]::-ms-thumb,
.rangeContainer input[type=range]::-moz-slider-thumb,
.rangeContainer input[type=range]::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: #007bff;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}
.inputContainer{
	margin:5px 0;
}
.inputText {
	width: 250px;
    outline: none;
    background: var(--bg_secondary);
    border: unset;
    font-size: 18px;
    text-indent: 10px;
    color: var(--text_secondary);
    font-family: 'Baloo Paaji';
	}
`;
				document.body.appendChild(css);
			}
		}

		component = new gui({
			name: "Aymen",
			width: 700,
			root: document.body,

			theme: {
				container_bg: "#0f0f0fe6",
				bg_primary: "#0f0f0f",
				bg_secondary: "#2c2c2c",
				text_primary: "#7a7a7a",
				text_secondary: "#ffffff",
				textHover: "rgb(0,0,0)",
				font: {
					fontFamily: "Baloo Paaji",
					fontSize: "20px",
				},
			},
		});

		component.init();

		component.register([
			{ type: "folder", label: "Visuals" },
			{ type: "folder", label: "Misc" },
			{ type: "folder", label: "AutoSpike" },
			{ type: "folder", label: "AutoSteal" },
			{ type: "folder", label: "Craft&Recycle" },
			{ type: "folder", label: "Spectator" },
			{ type: "folder", label: "AutoFarm" },
			{ type: "folder", label: "Keybinds" },
			{ type: "folder", label: "Token" },
			{ type: "folder", label: "Tracers" },
			{ type: "folder", label: "Skins" },
			{ type: "folder", label: "Others" },
		]);

		component.register(
			[
				{
					type: "checkbox",
					label: "PlayerOnTop",
					object: settings.PlayerOnTop,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "BoxOnTop",
					object: settings.BoxOnTop,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "ChestOnTop",
					object: settings.ChestOnTop,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "TotemOnTop",
					object: settings.TotemOnTop,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				// {
				// 	type: "checkbox",
				// 	label: "TreasureOnTop",
				// 	object: settings.TreasureOnTop,
				// 	property: "enabled",
				// 	action() {
				// 		UtilsUI.saveSettings();
				// 	},
				// },
				{
					type: "checkbox",
					label: "ChestInfo",
					object: settings.ChestInfo,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "BoxInfo",
					object: settings.BoxInfo,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "TotemInfo",
					object: settings.TotemInfo,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "JoinLeaves",
					object: settings.JoinLeaves,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "WeatherInfo",
					object: settings.WeatherInfo,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "BuildsInfo",
					object: settings.BuildsInfo,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "ExtractorInfo",
					object: settings.ExtractorInfo,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "ColoredSpikes",
					object: settings.ColoredSpikes,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "ShowHP",
					object: settings.ShowHP,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "Timers",
					object: settings.Timers,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "ListEnabledHacks",
					object: settings.ListEnabledHacks,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "Roofs",
					object: settings.Roofs,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "NoFog",
					object: settings.NoFog,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "Xray",
					object: settings.Xray,
					property: "enabled",
					action() {
						UtilsUI.saveSettings();
					},
				},
			],
			{ folder: "Visuals" }
		);

		component.register(
			[
				{
					type: "checkbox",
					label: "AutoExtractorTake",
					object: settings.AutoExtractorTake,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoExtractorPut",
					object: settings.AutoExtractorPut,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoBreadTake",
					object: settings.AutoBreadTake,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoBreadPut",
					object: settings.AutoBreadPut,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoPilot",
					object: settings.AutoPilot,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoFeed",
					object: settings.AutoFeed,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoBuild",
					object: settings.AutoBuild,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoRespawn",
					object: settings.AutoRespawn,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoCrown",
					object: settings.AutoCrown,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoBook",
					object: settings.AutoBook,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoIce",
					object: settings.AutoIce,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AimBot",
					object: settings.AimBot,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoTotem",
					object: settings.AutoTotem,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoTame",
					object: settings.AutoTame,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoSeed",
					object: settings.AutoSeed,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "select",
					label: "AutoSeed Seed",
					object: settings.AutoSeed,
					property: "seed",
					options: ["Berry", "Wheat", "Pumpkin", "Thornbush", "Aloe", "Watermelon", "Garlic", "Carrot", "Tomato"],
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "select",
					label: "AutoBuild Build",
					object: settings.AutoBuild,
					property: "build",
					options: ["Roofs", "Bridges", "Plots"],
					onChange: () => {
						UtilsUI.saveSettings();
					},
					action: (e) => (settings.AutoBuild.build = e.target.value),
				},
				{
					type: "checkbox",
					label: "AutoFarm",
					object: settings.AutoFarm,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "PutThatMuch",
					object: settings.PutThatMuch,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "range",
					label: "Put That Much In Chest",
					object: settings.PutThatMuch,
					options: { min: 10, max: 8e3, step: 10 },
					property: "amount",
					onChange: () => {
						UtilsUI.saveSettings();
					},
					action: (e) => (settings.PutThatMuch.amount = e.target.value),
				},
				{ type: "display", label: "Put Amount", object: settings.PutThatMuch, objectName: "PutThatMuch", property: "amount" },
			],
			{ folder: "Misc" }
		);

		component.register(
			[
				{ type: "display", label: "AutoFire Key", object: settings.AutoFire, objectName: "AutoFire", property: "key" },
				{
					type: "button",
					label: "Set AutoFire Key",
					action() {
						UtilsUI.setKeybind("AutoFire");
					},
				},

				{ type: "display", label: "AutoExtractorTake Key", object: settings.AutoExtractorTake, objectName: "AutoExtractorTake", property: "key" },
				{
					type: "button",
					label: "Set AutoExtractorTake Key",
					action() {
						UtilsUI.setKeybind("AutoExtractorTake");
					},
				},
				{ type: "display", label: "AutoExtractorPut Key", object: settings.AutoExtractorPut, objectName: "AutoExtractorPut", property: "key" },
				{
					type: "button",
					label: "Set AutoExtractorPut Key",
					action() {
						UtilsUI.setKeybind("AutoExtractorPut");
					},
				},
				{ type: "display", label: "AutoBreadTake Key", object: settings.AutoBreadTake, objectName: "AutoBreadTake", property: "key" },
				{
					type: "button",
					label: "Set AutoBreadTake Key",
					action() {
						UtilsUI.setKeybind("AutoBreadTake");
					},
				},
				{ type: "display", label: "AutoBreadPut Key", object: settings.AutoBreadPut, objectName: "AutoBreadPut", property: "key" },
				{
					type: "button",
					label: "Set AutoBreadPut Key",
					action() {
						UtilsUI.setKeybind("AutoBreadPut");
					},
				},
				{ type: "display", label: "DropSword Key", object: settings.DropSword, objectName: "DropSword", property: "key" },
				{
					type: "button",
					label: "Set DropSword Key",
					action() {
						UtilsUI.setKeybind("DropSword");
					},
				},
				{ type: "display", label: "AutoEmerald Key", object: settings.AutoEmerald, objectName: "AutoEmerald", property: "key" },
				{
					type: "button",
					label: "Set AutoEmerald Key",
					action() {
						UtilsUI.setKeybind("AutoEmerald");
					},
				},
				{ type: "display", label: "AutoSeed Key", object: settings.AutoSeed, objectName: "AutoSeed", property: "key" },
				{
					type: "button",
					label: "Set AutoSeed Key",
					action() {
						UtilsUI.setKeybind("AutoSeed");
					},
				},
				{ type: "display", label: "AutoBuild Key", object: settings.AutoBuild, objectName: "AutoBuild", property: "key" },
				{
					type: "button",
					label: "Set AutoBuild Key",
					action() {
						UtilsUI.setKeybind("AutoBuild");
					},
				},
				{ type: "display", label: "AutoTotem Key", object: settings.AutoTotem, objectName: "AutoTotem", property: "key" },
				{
					type: "button",
					label: "Set AutoTotem Key",
					action() {
						UtilsUI.setKeybind("AutoTotem");
					},
				},
				{ type: "display", label: "AimBot Key", object: settings.AimBot, objectName: "AimBot", property: "key" },
				{
					type: "button",
					label: "Set AimBot Key",
					action() {
						UtilsUI.setKeybind("AimBot");
					},
				},
				{ type: "display", label: "Xray Key", object: settings.Xray, objectName: "Xray", property: "key" },
				{
					type: "button",
					label: "Set Xray Key",
					action() {
						UtilsUI.setKeybind("Xray");
					},
				},
			],
			{ folder: "Keybinds" }
		);

		component.register(
			[
				{ type: "display", label: "AutoSpike Key", object: settings.AutoSpike, objectName: "AutoSpike", property: "key" },
				{
					type: "button",
					label: "Set AutoSpike Key",
					action() {
						UtilsUI.setKeybind("AutoSpike");
					},
				},
				{
					type: "checkbox",
					label: "AutoSpike 2",
					object: settings.AutoSpike,
					property: "mode",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "select",
					label: "AutoSpike Priority 1",
					object: settings.AutoSpike.priority,
					property: "0",
					value: "Reidite Spike",
					options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall"],
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "select",
					label: "AutoSpike Priority 2",
					object: settings.AutoSpike.priority,
					property: "1",
					value: "Amethyst Spike",
					options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall"],
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "select",
					label: "AutoSpike Priority 3",
					object: settings.AutoSpike.priority,
					property: "2",
					value: "Diamond Spike",
					options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall"],
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "select",
					label: "AutoSpike Priority 4",
					object: settings.AutoSpike.priority,
					property: "3",
					value: "Gold Spike",
					options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall"],
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "select",
					label: "AutoSpike Priority 5",
					object: settings.AutoSpike.priority,
					property: "4",
					value: "Stone Spike",
					options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall"],
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "select",
					label: "AutoSpike Priority 6",
					object: settings.AutoSpike.priority,
					property: "5",
					value: "Wood Spike",
					options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall"],
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "select",
					label: "AutoSpike Priority 7",
					object: settings.AutoSpike.priority,
					property: "6",
					value: "Wood Wall",
					options: ["Reidite Spike", "Amethyst Spike", "Diamond Spike", "Gold Spike", "Stone Spike", "Wood Spike", "Wood Wall"],
					onChange() {
						UtilsUI.saveSettings();
					},
				},
			],
			{ folder: "AutoSpike" }
		);

		component.register(
			[
				{
					type: "checkbox",
					label: "AutoSteal",
					object: settings.AutoSteal,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoUnlock",
					object: settings.AutoSteal,
					property: "unlock",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{ type: "display", label: "AutoSteal Key", object: settings.AutoSteal, objectName: "AutoSteal", property: "key" },
				{
					type: "button",
					label: "Set AutoSteal Key",
					action() {
						UtilsUI.setKeybind("AutoSteal");
					},
				},
			],
			{ folder: "AutoSteal" }
		);

		component.register(
			[
				{
					type: "checkbox",
					label: "AutoCraft",
					object: settings.AutoCraft,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{ type: "display", label: "AutoCraft Key", object: settings.AutoCraft, objectName: "AutoCraft", property: "key" },
				{
					type: "button",
					label: "Set AutoCraft Key",
					action() {
						UtilsUI.setKeybind("AutoCraft");
					},
				},
				{
					type: "checkbox",
					label: "AutoRecycle",
					object: settings.AutoRecycle,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{ type: "display", label: "AutoRecycle Key", object: settings.AutoRecycle, objectName: "AutoRecycle", property: "key" },
				{
					type: "button",
					label: "Set AutoRecycle Key",
					action() {
						UtilsUI.setKeybind("AutoRecycle");
					},
				},
			],
			{ folder: "CraftRecycle" }
		);

		component.register(
			[
				{
					type: "checkbox",
					label: "Spectator",
					object: settings.Spectator,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "range",
					label: "Spectator Speed",
					options: { min: 0.05, step: 0.05, max: 1 },
					object: settings.Spectator,
					property: "speed",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{ type: "display", label: "Spectator Speed", object: settings.Spectator, objectName: "Spectator", property: "speed" },
				{ type: "display", label: "Spectator Key", object: settings.Spectator, objectName: "Spectator", property: "key" },
				{
					type: "button",
					label: "Set Spectator Key",
					action() {
						UtilsUI.setKeybind("Spectator");
					},
				},
			],
			{ folder: "Spectator" }
		);

		component.register(
			[
				{
					type: "checkbox",
					label: "AutoFarm",
					object: settings.AutoFarm,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "AutoWater",
					object: settings.AutoFarm,
					property: "water",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{ type: "display", label: "AutoFarm Key", object: settings.AutoFarm, objectName: "AutoFarm", property: "key" },
				{
					type: "button",
					label: "Set AutoFarm key",
					action() {
						UtilsUI.setKeybind("AutoFarm");
					},
				},
				{ type: "display", label: "X", object: settings.AutoFarm, objectName: "AutoFarm", property: "x" },
				{ type: "display", label: "Y", object: settings.AutoFarm, objectName: "AutoFarm", property: "y" },
				{ type: "display", label: "X2", object: settings.AutoFarm, objectName: "AutoFarm", property: "xx" },
				{ type: "display", label: "Y2", object: settings.AutoFarm, objectName: "AutoFarm", property: "yy" },
				{ type: "display", label: "SX", object: settings.AutoFarm, objectName: "AutoFarm", property: "sx" },
				{ type: "display", label: "SY", object: settings.AutoFarm, objectName: "AutoFarm", property: "sy" },
				{
					type: "button",
					label: "Left Top Farm",
					action() {
						const me = world[vars.fast_units][user.id * world[vars.custormWorld]];
						me && ((settings.AutoFarm.x = Math.floor(me.x)), (settings.AutoFarm.y = Math.floor(me.y)), UtilsUI.saveSettings());
					},
				},
				{
					type: "button",
					label: "Right Bot Farm",
					action() {
						const me = world[vars.fast_units][user.id * world[vars.custormWorld]];
						me && ((settings.AutoFarm.xx = Math.floor(me.x)), (settings.AutoFarm.yy = Math.floor(me.y)), UtilsUI.saveSettings());
					},
				},
				{
					type: "button",
					label: "Safe Point",
					action() {
						const me = world[vars.fast_units][user.id * world[vars.custormWorld]];
						me && ((settings.AutoFarm.sx = Math.floor(me.x)), (settings.AutoFarm.sy = Math.floor(me.y)), UtilsUI.saveSettings());
					},
				},
			],
			{ folder: "AutoFarm" }
		);

		component.register(
			[
				{
					type: "checkbox",
					label: "PlayerTracers",
					object: settings.PlayerTracers,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "KrakenTracers",
					object: settings.KrakenTracers,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "SandwormTracers",
					object: settings.SandwormTracers,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "SpiderTracers",
					object: settings.SpiderTracers,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "WolfTracers",
					object: settings.WolfTracers,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "RabbitTracers",
					object: settings.RabbitTracers,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "VultureTracers",
					object: settings.VultureTracers,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "BabyDragonTracers",
					object: settings.BabyDragonTracers,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
				{
					type: "checkbox",
					label: "BabyLavaDragonTracers",
					object: settings.BabyLavaDragonTracers,
					property: "enabled",
					onChange() {
						UtilsUI.saveSettings();
					},
				},
			],
			{ folder: "Tracers" }
		);

		component.register(
			[
				{
					type: "text",
					label: "Token",
					object: settings.TokenJoiner,
					property: "token",
					onChange(t) {
						UtilsUI.saveSettings();
						window2.token = t;
					},
					action: (t) => {
						settings.TokenJoiner.token = t.target.value;
					},
				},
				{
					type: "text",
					label: "TokenID",
					object: settings.TokenJoiner,
					property: "token_id",
					onChange(t) {
						UtilsUI.saveSettings();
						window2.token_id = t;
					},
					action: (t) => {
						settings.TokenJoiner.token_id = t.target.value;
					},
				},
				{
					type: "button",
					label: "Set Token",

					onChange(t) {
						UtilsUI.saveSettings();
					},
					action: () => {
						user[vars.token] = settings.TokenJoiner.token;
						user[vars.token_id] = settings.TokenJoiner.token_id;
						alert("token was set");
					},
				},

				// {
				// 	type: "button",
				// 	label: "Go To Lobby",
				// 	action() {
				// 		// client && client.ⲆⵠᐃⵠⲆᐃᐃⲆΔ();
				// 	},
				// },
				{
					type: "button",
					label: "Copy Token&TokenID",
					action() {
						prompt("Ctrl + C", `\`\`\`TOKEN: ${user[vars.token]}\nTOKEN_ID: ${user[vars.token_id]}\`\`\``);
					},
				},
			],
			{ folder: "Token" }
		);

		component.register(
			[
				{
					type: "select",
					label: "Skin",
					options: skins,
					onChange: (e) => {
						const me = world[vars.fast_units][user.id * world[vars.custormWorld]];
						me[vars.skin] = skins.indexOf(e);
						// me[vars.playerInfo][vars.skin] = skins.indexOf(e);
						window2.currentSkin = skins.indexOf(e);
					},
				},
				{
					type: "select",
					label: "Accessory",
					options: accessories,
					onChange: (e) => {
						const me = world[vars.fast_units][user.id * world[vars.custormWorld]];
						me[vars.accessory] = accessories.indexOf(e);
						// me[vars.playerInfo][vars.accessory] = accessories.indexOf(e);
						window2.currentAccessory = accessories.indexOf(e);
					},
				},
				{
					type: "select",
					label: "Book",
					options: books,
					onChange: (e) => {
						const me = world[vars.fast_units][user.id * world[vars.custormWorld]];
						me[vars.book] = books.indexOf(e);
						// me[vars.playerInfo][vars.book] = books.indexOf(e);
						window2.currentBook = books.indexOf(e);
					},
				},
				{
					type: "select",
					label: "Bag",
					options: bags,
					onChange: (e) => {
						const me = world[vars.fast_units][user.id * world[vars.custormWorld]];
						me[vars.bag] = bags.indexOf(e);
						window2.currentBag = bags.indexOf(e);
					},
				},
			],
			{
				folder: "Skins",
			}
		);
	},
	saveSettings: () => {
		for (const property in settings) {
			localStorage.setItem(property + "exclusive_v5", JSON.stringify(settings[property]));
		}
	},
	loadSettings: () => {
		for (const property in settings) {
			const data = localStorage.getItem(property + "exclusive_v5");
			data && (settings[property] = JSON.parse(data));
		}

		settings.AimBot.enabled = false;
		settings.AutoSpike.enabled = false;
		settings.JoinLeaves.join = [];
		settings.JoinLeaves.leave = [];
		settings.Xray.enabled = false;
		settings.AutoSeed.enabled = false;
		settings.AutoBreadTake.enabled = false;
		for (const e in settings.nows) settings.nows[e] = 0;
	},
	setKeybind: (property) => {
		if (!settings[property]) return;
		if (!settings[property].key) return;

		settings[property].key = "Press Any Key";

		document.onkeydown = function setBind(event) {
			event.code === "Escape" ? (settings[property].key = "NONE") : (settings[property].key = event.code);
			document.onkeydown = null;
			UtilsUI.saveSettings();
		};
		// document.addEventListener("keydown", function setBind(event) {
		// 	event.code === "Escape" ? (settings[property].key = "NONE") : (settings[property].key = event.code);
		// 	document.removeEventListener("keydown", setBind);
		// 	UtilsUI.saveSettings();
		// });
	},
	loadScript: () => {
		// return;
		UtilsUI.loadSettings();

		UtilsUI.initGUI();

		coloredSpikes();
		// return;
		document.addEventListener("keydown", (event) => {
			if (!user) return;
			if (user[vars.terminal].open) return;
			if (user[vars.chat].open) return;
			for (const property in settings) event.code === settings[property].key && settings[property].keyMode === "hold" && (settings[property].enabled = true);
		});
		document.addEventListener("keyup", (event) => {
			if (!user) return;
			if (user[vars.terminal].open) return;
			if (user[vars.chat].open) return;
			for (const property in settings) event.code === settings[property].key && settings[property].keyMode === "hold" && (settings[property].enabled = false);
		});
		document.addEventListener("keypress", (event) => {
			if (!user) return;
			if (user[vars.terminal].open) return;
			if (user[vars.chat].open) return;
			for (const property in settings) event.code === settings[property].key && settings[property].keyMode === "press" && (settings[property].enabled = !settings[property].enabled);

			if (event.code === settings.Spectator.key && !settings.Spectator.enabled) {
				user[vars.cam][vars.update] = settings.Spectator.original;
				client[vars.socket].send(JSON.stringify([packets.focus]));
			}
		});

		function customAngleDrawer() {
			const me = world[vars.fast_units][user.id * world[vars.custormWorld]];
			var angle = 0;
			settings.AimBot.angle && !angle && (angle = settings.AimBot.angle);
			settings.AutoEmerald.angle && !angle && (angle = settings.AutoEmerald.angle);
			settings.AutoFarm.angle && !angle && (angle = settings.AutoFarm.angle);
			settings.AutoTame.angle && !angle && (angle = settings.AutoTame.angle);
			// var angle = settings.AutoFarm.angle || settings.AimBot.angle || calcAngle(mouse.pos, { x: user[vars.cam].x + me.x, y: user[vars.cam].y + me.y });

			if (me) {
				me.angle = angle;
				me.nangle = angle;
			}

			var move = 0;

			var left = keyboard.is_left();
			if (left) move |= 1;

			var right = keyboard.is_right();
			if (right) move |= 2;

			var bottom = keyboard.is_bottom();
			if (bottom) move |= 4;

			var top = keyboard.is_top();
			if (top) move |= 8;

			if (user[vars.control].previous != move) client.send_move(move);
			user[vars.control].previous = move;
		}

		Hack = function () {
			requestAnimationFrame(Hack);

			for (const [property, object, disp] of component.observed) disp.innerHTML = String(object[property]);
			for (const [property, object, cBox] of component.observed2) object[property] ? cBox.classList.add("active") : cBox.classList.remove("active");

			if (!world || !user || (client[vars.socket] ? client[vars.socket].readyState !== WebSocket.OPEN : true)) return;

			if (!client[vars.socket].current) {
				client[vars.socket].current = true;
				client[vars.socket].addEventListener("message", packetHandler);
			}

			const me = world[vars.fast_units][user.id * world[vars.custormWorld]];
			window2.me = me;

			const timestamp = Date.now();
			window2.tm = timestamp;

			if (settings.AutoTotem.enabled) {
				if (timestamp - settings.nows.autototem > 80) {
					const totems = world[vars.units][ITEMS.TOTEM];
					totems.forEach((totem) => {
						if (getdist(totem, me) <= 300) {
							client[vars.socket].send(JSON.stringify([packets.joinTotem, totem[vars.pid], totem.id]));
							settings.nows.autototem = timestamp;
						}
					});
				}
			}
			if (settings.Spectator.enabled) {
				if (!settings.Spectator.original) settings.Spectator.original = user[vars.cam][vars.update];
				user[vars.cam][vars.update] = () => {};
				keyboard.is_left() && (user[vars.cam].x += settings.Spectator.speed * 1e2);
				keyboard.is_right() && (user[vars.cam].x -= settings.Spectator.speed * 1e2);
				keyboard.is_bottom() && (user[vars.cam].y -= settings.Spectator.speed * 1e2);
				keyboard.is_top() && (user[vars.cam].y += settings.Spectator.speed * 1e2);
			}

			if (settings.AutoCraft.enabled && settings.AutoCraft.last != null) {
				if (timestamp - settings.nows.autocraft > 30) {
					if (gauges.food < 40 || gauges.water < 50 || (100 - gauges.heat >= 95 && settings.AutoIce.enabled)) {
						checkIce();
						eatFood();
						if (gauges.water < 50) client[vars.socket].send(JSON.stringify([packets.equip, 127]));
						settings.nows.autocraft = timestamp + 100;
					} else {
						client[vars.socket].send([JSON.stringify([packets.craft, settings.AutoCraft.last])]);
						settings.nows.autocraft = timestamp;
					}
				}
			}
			if (settings.AutoRecycle.enabled && settings.AutoRecycle.last != null) {
				if (timestamp - settings.nows.autorecycle > 30) {
					if (gauges.food < 40 || gauges.water < 50 || (100 - gauges.heat >= 95 && settings.AutoIce.enabled)) {
						checkIce();
						eatFood();
						settings.nows.autorecycle = timestamp + 100;
						if (gauges.water < 50) client[vars.socket].send(JSON.stringify([packets.equip, 127]));
					} else {
						client[vars.socket].send(JSON.stringify([packets.recycle, settings.AutoRecycle.last]));
						settings.nows.autorecycle = timestamp;
					}
				}
			}

			if (settings.AutoEmerald.enabled) {
				if (timestamp - settings.nows.autoemerald > 50) {
					settings.nows.autoemerald = Date.now();

					const stand = emerald.standPos[emerald.i];
					const emePos = emerald.EmePos[emerald.i];

					const move = Pathfinde2(me, stand.x, stand.y);
					client.send_move(move);

					if (user[vars.inv][vars.n][48])
						if (me.right !== 48) client[vars.socket].send(JSON.stringify([packets.equip, 48]));
						else if (user[vars.inv][vars.n][47]) if (me.right !== 47) client[vars.socket].send(JSON.stringify([packets.equip, 47]));

					if (getdist(me, { x: emePos.x * 100, y: emePos.y * 100 }) < 200) {
						settings.AutoEmerald.angle = calcAngle(me, { r: { x: emePos.x * 100, y: emePos.y * 100 } }, true);

						user[vars.control][vars.update] = customAngleDrawer;

						const e = 2 * Math.PI,
							Angle255 = Math.floor((((settings.AimBot.angle + e) % e) * 255) / e);

						client[vars.socket].send(JSON.stringify([packets.attack, Angle255]));
						client[vars.socket].send(JSON.stringify([packets.stopAttack]));
					} else settings.AutoEmerald.angle = null;
				}
			} else settings.AutoEmerald.angle = null;
			// if (settings.AutoFarm.enabled) {
			// 	if (timestamp - settings.nows.autofarm > 250) {
			// 		if (!isPointInRange(me.x, me.y, settings.AutoFarm.x, settings.AutoFarm.y, settings.AutoFarm.xx, settings.AutoFarm.yy)) {
			// 			// if (settings.AutoFarm.sx && settings.AutoFarm.sy) client.send_move(Pathfinde(me, {x:settings.AutoFarm.sx,y:settings.AutoFarm.sy}))
			// 			client.send_move(Pathfinde(me, { x: (settings.AutoFarm.x + settings.AutoFarm.xx) / 2, y: (settings.AutoFarm.y + settings.AutoFarm.yy) / 2 }));
			// 			settings.AutoFarm.angle = null;
			// 			return;
			// 		}
			// 		for (const seeds of [
			// 			world[vars.units][ITEMS.SEED],
			// 			world[vars.units][ITEMS.WHEAT_SEED],
			// 			world[vars.units][ITEMS.PUMPKIN_SEED],
			// 			world[vars.units][ITEMS.CARROT_SEED],
			// 			world[vars.units][ITEMS.TOMATO_SEED],
			// 			world[vars.units][ITEMS.THORNBUSH_SEED],
			// 			world[vars.units][ITEMS.GARLIC_SEED],
			// 			world[vars.units][ITEMS.ALOE_VERA_SEED],
			// 			world[vars.units][ITEMS.WATERMELON_SEED],
			// 		]) {
			// 			const target = findClosestSeed(me, seeds, 20000);
			// 			if (!target) {
			// 				settings.AutoFarm.angle = null;
			// 				client.send_move(16);
			// 			}
			// 			if (target) {
			// 				user[vars.control][vars.update] = () => {};
			// 				if ((user[vars.inv][vars.n][100] || user[vars.inv][vars.n][99]) && target && target.x >= settings.AutoFarm.x && target.x <= settings.AutoFarm.xx && target.y >= settings.AutoFarm.y && target.y <= settings.AutoFarm.yy) {
			// 					const path = Pathfinde(me, target);
			// 					client.send_move(path);

			// 					if (user[vars.inv][vars.n][100] && me.right != 100) {
			// 						client[vars.socket].send(JSON.stringify([packets.equip, 100]));
			// 					} else if (user[vars.inv][vars.n][99] && me.right != 99 && me.right != 100) client[vars.socket].send(JSON.stringify([packets.equip, 99]));

			// 					settings.AutoFarm.angle = calcAngle(me, target, true);
			// 					if (getdist(target, me) <= 220) {
			// 						user[vars.control][vars.update] = () => {
			// 							me.angle = settings.AutoFarm.angle;
			// 						};
			// 						log(settings.AutoFarm.angle);

			// 						client[vars.socket].send(JSON.stringify([packets.attack, settings.AutoFarm.angle]));
			// 						client[vars.socket].send(JSON.stringify([packets.stopAttack]));
			// 					} else user[vars.control][vars.update] = settings.AimBot.drawAngle;
			// 					break;
			// 				}
			// 			} else if (settings.AutoFarm.water) {
			// 				const target2 = findClosestSeed2(me, seeds, 2000);
			// 				if (target2 && target2.x >= settings.AutoFarm.x && target2.x <= settings.AutoFarm.xx && target2.y >= settings.AutoFarm.y && target2.y <= settings.AutoFarm.yy) {
			// 					const path = Pathfinde(me, target2);
			// 					client.send_move(path);
			// 					if (me.right != 85 && user[vars.inv][vars.n][85]) client[vars.socket].send(JSON.stringify([packets.equip, 85]));

			// 					settings.AutoFarm.angle = calcAngle(me, target2, true);
			// 					if (getdist(target2, me) <= 100) {
			// 						client[vars.socket].send(JSON.stringify([packets.attack, settings.AutoFarm.angle]));
			// 						client[vars.socket].send(JSON.stringify([packets.stopAttack]));
			// 					}
			// 				}
			// 			} else {
			// 				if (settings.AutoFarm.sx && settings.AutoFarm.sy) {
			// 					const path = Pathfinde2(me, settings.AutoFarm.sx, settings.AutoFarm.sy);
			// 					client.send_move(path);
			// 					(settings.AutoFarm.angle = null), client.send_move(16);
			// 				}
			// 			}
			// 		}
			// 		settings.nows.autofarm = timestamp;
			// 	}
			// } else settings.AutoFarm.angle = null;

			if (settings.AutoFarm.enabled) {
				if (timestamp - settings.nows.autofarm > 100) {
					const units = world[vars.units];
					let closest = null;
					let min = Infinity;

					// 10 not grown
					// 0 grown but no fruits
					// x grown with x fruits
					// 16 + x dried with x fruits

					for (const seed of [
						...units[ITEMS.SEED],
						...units[ITEMS.WHEAT_SEED],
						...units[ITEMS.PUMPKIN_SEED],
						...units[ITEMS.CARROT_SEED],
						...units[ITEMS.TOMATO_SEED],
						...units[ITEMS.THORNBUSH_SEED],
						...units[ITEMS.GARLIC_SEED],
						...units[ITEMS.ALOE_VERA_SEED],
						...units[ITEMS.WATERMELON_SEED],
					])
						if (getdist(me, seed) < min && seed.info & 16 && settings.AutoFarm.water && isPointInRange(seed.x, seed.y, settings.AutoFarm.x, settings.AutoFarm.y, settings.AutoFarm.xx, settings.AutoFarm.yy)) closest = seed;

					if (!closest)
						for (const seed of [
							...units[ITEMS.SEED],
							...units[ITEMS.WHEAT_SEED],
							...units[ITEMS.PUMPKIN_SEED],
							...units[ITEMS.CARROT_SEED],
							...units[ITEMS.TOMATO_SEED],
							...units[ITEMS.THORNBUSH_SEED],
							...units[ITEMS.GARLIC_SEED],
							...units[ITEMS.ALOE_VERA_SEED],
							...units[ITEMS.WATERMELON_SEED],
						])
							if (getdist(me, seed) < min && (seed.info & 1 || seed.info & 2 || seed.info & 3) && seed.info !== 10 && isPointInRange(seed.x, seed.y, settings.AutoFarm.x, settings.AutoFarm.y, settings.AutoFarm.xx, settings.AutoFarm.yy))
								closest = seed;

					if (closest) {
						settings.AutoFarm.angle = calcAngle(me, closest, true);

						user[vars.control][vars.update] = customAngleDrawer;

						const e = 2 * Math.PI,
							Angle255 = Math.floor((((settings.AutoFarm.angle + e) % e) * 255) / e);

						const move = Pathfinde2(me, closest.x, closest.y);
						getdist(me, closest) > 50 && client.send_move(move);

						if (closest.info & 16 && settings.AutoFarm.water && user[vars.inv][vars.n][85]) {
							// water plants if water is enabled otherwise it will farm them

							// use watercan
							if (me.right !== 85) client[vars.socket].send(JSON.stringify([packets.equip, 85]));

							// water plants if distance is < 100 other wise it will continue getting closer to the plant
							if (getdist(me, closest) <= 100) {
								client[vars.socket].send(JSON.stringify([packets.attack, Angle255]));
								client[vars.socket].send(JSON.stringify([packets.stopAttack]));
							} else client.send_move(Pathfinde(me, closest));
						}
						// no seeds need water
						else if (getdist(me, closest) < 200) {
							// use fork
							if (user[vars.inv][vars.n][99] && !user[vars.inv][vars.n][100] && me.right !== 99) client[vars.socket].send(JSON.stringify([packets.equip, 99]));
							if (user[vars.inv][vars.n][100] && me.right !== 100) client[vars.socket].send(JSON.stringify([packets.equip, 100]));

							// farm plants
							client[vars.socket].send(JSON.stringify([packets.attack, Angle255]));
							client[vars.socket].send(JSON.stringify([packets.stopAttack]));
						}
					} else if (settings.AutoFarm.sx && settings.AutoFarm.sy) {
						user[vars.control][vars.update] = settings.AimBot.drawAngle;
						const move = Pathfinde2(me, settings.AutoFarm.sx, settings.AutoFarm.sy);
						client.send_move(move);
					}
				}
			}

			if (settings.AutoTame.enabled) {
				let min = Infinity;
				let closest = null;
				const units = world[vars.units],
					tamables = [...units[ITEMS.BABY_LAVA], ...units[ITEMS.BABY_DRAGON], ...units[ITEMS.BABY_MAMMOTH], ...units[ITEMS.HAWK_COLORED], ...units[ITEMS.HAWK], ...units[ITEMS.HEN], ...units[ITEMS.CRAB_BOSS]];

				if (user[vars.inv][vars.n][162] && timestamp - settings.nows.autotame > 100) {
					for (const entity of tamables) {
						if (getdist(me, entity) < min) closest = entity;
						if (getdist(me, entity) > 200) continue;

						if (entity.info == 0) {
							settings.nows.autotame = Date.now();

							if (me.right !== 162) client[vars.socket].send(JSON.stringify([packets.equip, 162]));

							settings.AutoTame.angle = calcAngle(me, entity, true);
							settings.AutoFarm.angle = null;

							user[vars.control][vars.update] = customAngleDrawer;

							const e = 2 * Math.PI,
								Angle255 = Math.floor((((settings.AutoTame.angle + e) % e) * 255) / e);

							client[vars.socket].send(JSON.stringify([packets.attack, Angle255]));
							client[vars.socket].send(JSON.stringify([packets.stopAttack]));
						} else settings.AutoTame.angle = null;
					}
				}
			} else settings.AutoTame.angle = null;

			if (settings.AimBot.enabled) {
				let n = 0;
				switch (holdingGearType(me)) {
					case "AXE":
						n = 110;
						break;
					case "SWORD":
						n = 140;
						break;
					case "SPEAR":
						n = 200;
						break;
					case "PIRATE":
						n = 150;
						break;
				}
				if (n) {
					const target = findTarget(me, world[vars.units][0], n);
					if (target) {
						settings.AimBot.angle = calcAngle(me, target, true);
						settings.AutoFarm.angle = null;
						settings.AutoTame.angle = null;

						user[vars.control][vars.update] = customAngleDrawer;

						const e = 2 * Math.PI,
							Angle255 = Math.floor((((settings.AimBot.angle + e) % e) * 255) / e);

						client[vars.socket].send(JSON.stringify([packets.attack, Angle255]));
						client[vars.socket].send(JSON.stringify([packets.stopAttack]));
					} else settings.AimBot.angle = null;
				} else settings.AimBot.angle = null;
			} else settings.AimBot.angle = null;

			if (settings.AutoSteal.enabled) {
				if (timestamp - settings.nows.autosteal > 50) {
					const chests = world[vars.units][11];
					const ovens = world[vars.units][34];
					const windmills = world[vars.units][32];
					chests.forEach((chest) => {
						if (getdist(chest, me) <= 300) {
							if (settings.AutoSteal.unlock && !isAlly(chest) && chest.action) {
								client[vars.socket].send(JSON.stringify([packets.unlock, chest[vars.pid], chest.id]));
							}
							client[vars.socket].send(JSON.stringify([packets.chestTake, chest[vars.pid], chest.id]));
						}
					});
					ovens.forEach((oven) => {
						if (getdist(oven, me) <= 300) {
							client[vars.socket].send(JSON.stringify([packets.ovenTake, oven[vars.pid], oven.id]));
						}
					});
					windmills.forEach((windmill) => {
						if (getdist(windmill, me) <= 300) {
							client[vars.socket].send(JSON.stringify([packets.windmillTake, windmill[vars.pid], windmill.id]));
						}
					});
					const extractorIds = [24, 25, 26, 27, 28];
					for (let i = 0; i < extractorIds.length; i++) {
						const extractors = world[vars.units][extractorIds[i]];
						extractors.forEach((extractor) => {
							if (getdist(extractor, me) <= 300) {
								client[vars.socket].send(JSON.stringify([22, extractor[vars.pid], extractor.id, extractor.type]));
							}
						});
					}
					settings.nows.autosteal = timestamp;
				}
			}
			if (settings.AutoCrown.enabled) {
				if (timestamp - settings.nows.autocrown > 3000 && user.ghost.enabled) {
					for (const resurrection of world[vars.units][ITEMS.RESURRECTION]) {
						if (getdist(resurrection, me) <= 100) {
							client[vars.socket].send(JSON.stringify([packets.revive, resurrection[vars.pid], resurrection.id]));
							// setTimeout(e=>{
							// if(!user.ghost.enabled)
							settings.nows.autocrown = timestamp;
							// },50)
							client[vars.socket].send(JSON.stringify([packets.equip, 152]));
							client[vars.socket].send(JSON.stringify([packets.equip, getBestHammer()]));
						}
					}
				}
			}
			if (settings.DropSword.enabled) {
				if (timestamp - settings.nows.dropsword > 80) {
					if (holdingGearType(me)) {
						client[vars.socket].send(JSON.stringify([packets.drop, me.right]));

						settings.nows.dropsword = timestamp;
					}
				}
			}
			if (settings.AutoFire.enabled) {
				if (timestamp - settings.nows.autofire > 100) {
					const pi2 = Math.PI * 2;
					if (user[vars.inv][vars.n][204]) {
						client[vars.socket].send(JSON.stringify([packets.build, 204, Math.floor((255 * ((me.angle + pi2) % pi2)) / pi2), 0]));
						client[vars.socket].send(JSON.stringify([packets.build, 204, Math.floor((255 * ((me.angle + pi2) % pi2)) / pi2), 1]));
						settings.nows.autobuild = timestamp;
					} else if (user[vars.inv][vars.n][209]) {
						client[vars.socket].send(JSON.stringify([packets.build, 209, Math.floor((255 * ((me.angle + pi2) % pi2)) / pi2), 0]));
						client[vars.socket].send(JSON.stringify([packets.build, 209, Math.floor((255 * ((me.angle + pi2) % pi2)) / pi2), 1]));
						settings.nows.autobuild = timestamp;
					}
				}
			}
			if (settings.AutoBuild.enabled) {
				if (timestamp - settings.nows.autobuild > 100) {
					const pi2 = Math.PI * 2;
					if (settings.AutoBuild.build === "Roofs" && user[vars.inv][vars.n][292]) {
						client[vars.socket].send(JSON.stringify([packets.build, 292, Math.floor((255 * ((me.angle + pi2) % pi2)) / pi2), 1]));
						settings.nows.autobuild = timestamp;
					} else if (settings.AutoBuild.build === "Bridges" && user[vars.inv][vars.n][216]) {
						client[vars.socket].send(JSON.stringify([packets.build, 216, Math.floor((255 * ((me.angle + pi2) % pi2)) / pi2), 1]));
						settings.nows.autobuild = timestamp;
					} else if (settings.AutoBuild.build === "Plots" && user[vars.inv][vars.n][234]) {
						client[vars.socket].send(JSON.stringify([packets.build, 234, Math.floor((255 * ((me.angle + pi2) % pi2)) / pi2), 1]));
						settings.nows.autobuild = timestamp;
					}
				}
			}
			if (settings.AutoSeed.enabled) {
				if (timestamp - settings.nows.autoseed > 100) {
					let seedId;

					switch (settings.AutoSeed.seed) {
						case "Berry":
							seedId = 115;
							break;
						case "Wheat":
							seedId = 132;
							break;
						case "Pumpkin":
							seedId = 188;
							break;
						case "Thornbush":
							seedId = 193;
							break;
						case "Aloe":
							seedId = 210;
							break;
						case "Watermelon":
							seedId = 208;
							break;
						case "Garlic":
							seedId = 191;
							break;
						case "Carrot":
							seedId = 204;
							break;
						case "Tomato":
							seedId = 206;
							break;
					}

					if (seedId && user[vars.inv][vars.n][seedId]) {
						const pi2 = Math.PI * 2;
						const angle = Math.floor((255 * ((me.angle + pi2) % pi2)) / pi2);
						client[vars.socket].send(JSON.stringify([packets.build, seedId, angle, 1]));
						settings.nows.autoseed = timestamp;
					}
				}
			}
			if (settings.AutoExtractorTake.enabled) {
				if (timestamp - settings.nows.autoextractortake > 100) {
					const extractorTypes = [
						ITEMS.EXTRACTOR_MACHINE_STONE,
						ITEMS.EXTRACTOR_MACHINE_GOLD,
						ITEMS.EXTRACTOR_MACHINE_DIAMOND,
						ITEMS.EXTRACTOR_MACHINE_AMETHYST,
						ITEMS.EXTRACTOR_MACHINE_REIDITE,
						ITEMS.EXTRACTOR_MACHINE_COPPER,
						ITEMS.EXTRACTOR_MACHINE_IRON,
						ITEMS.EXTRACTOR_MACHINE_JADE,
						ITEMS.EXTRACTOR_MACHINE_SAPPHIRE,
						ITEMS.EXTRACTOR_MACHINE_RUBY,
						ITEMS.EXTRACTOR_MACHINE_COAL,
						ITEMS.EXTRACTOR_MACHINE_AQUAMARINE,
						ITEMS.EXTRACTOR_MACHINE_EMERALD,
					];

					for (const type of extractorTypes) for (const extractor of world[vars.units][type]) if (getdist(extractor, me) <= 300) client[vars.socket].send(JSON.stringify([packets.extTake, extractor[vars.pid], extractor.id, extractor.type]));

					settings.nows.autoextractortake = timestamp;
				}
			}
			if (settings.AutoExtractorPut.enabled) {
				if (timestamp - settings.nows.autoextractorput > 100) {
					const extractorTypes = [
						ITEMS.EXTRACTOR_MACHINE_STONE,
						ITEMS.EXTRACTOR_MACHINE_GOLD,
						ITEMS.EXTRACTOR_MACHINE_DIAMOND,
						ITEMS.EXTRACTOR_MACHINE_AMETHYST,
						ITEMS.EXTRACTOR_MACHINE_REIDITE,
						ITEMS.EXTRACTOR_MACHINE_COPPER,
						ITEMS.EXTRACTOR_MACHINE_IRON,
						ITEMS.EXTRACTOR_MACHINE_JADE,
						ITEMS.EXTRACTOR_MACHINE_SAPPHIRE,
						ITEMS.EXTRACTOR_MACHINE_RUBY,
						ITEMS.EXTRACTOR_MACHINE_COAL,
						ITEMS.EXTRACTOR_MACHINE_AQUAMARINE,
						ITEMS.EXTRACTOR_MACHINE_EMERALD,
					];

					for (const type of extractorTypes) for (const extractor of world[vars.units][type]) if (getdist(extractor, me) <= 300) client[vars.socket].send(JSON.stringify([packets.extPut, 255, extractor[vars.pid], extractor.id, extractor.type]));

					settings.nows.autoextractorput = timestamp;
				}
			}
			if (settings.AutoBreadTake.enabled) {
				if (timestamp - settings.nows.autobreadtake > 100) {
					const ovens = world[vars.units][ITEMS.BREAD_OVEN];
					const windmills = world[vars.units][ITEMS.WINDMILL];

					for (const oven of ovens) if (getdist(oven, me) <= 300 && (oven.info & 0x7c00) >> 10 > 0) client[vars.socket].send(JSON.stringify([packets.ovenTake, oven[vars.pid], oven.id]));

					for (const windmill of windmills) if (getdist(windmill, me) <= 300 && (windmill.info & 0xff00) >> 8 > 0) client[vars.socket].send(JSON.stringify([packets.windMillTake, windmill[vars.pid], windmill.id]));

					settings.nows.autobreadtake = timestamp;
				}
			}
			if (settings.AutoBreadPut.enabled) {
				if (timestamp - settings.nows.autobreadput > 100) {
					const ovens = world[vars.units][ITEMS.BREAD_OVEN];
					const windmills = world[vars.units][ITEMS.WINDMILL];

					for (const oven of ovens)
						if (getdist(oven, me) <= 300 && (oven.info & 0x1f) < 31 && (oven.info & 0x3e0) >> 5 < 31) {
							client[vars.socket].send(JSON.stringify([packets.ovenPutWood, 31, oven[vars.pid], oven.id]));
							client[vars.socket].send(JSON.stringify([packets.ovenPutFlour, 31, oven[vars.pid], oven.id]));
						}
					for (const windmill of windmills) if (getdist(windmill, me) <= 300 && (windmill.info & 0xff) < 255) client[vars.socket].send(JSON.stringify([packets.windMillPut, 255, windmill[vars.pid], windmill.id]));

					settings.nows.autobreadput = timestamp;
				}
			}
			if (settings.AutoSpike.enabled) {
				if (timestamp - settings.nows.autospike > 50) {
					let bestSpike;

					for (const spike of settings.AutoSpike.priority) {
						if (spike === "Reidite Spike" && user[vars.inv][vars.n][329]) {
							bestSpike = 329;
							break;
						} else if (spike === "Amethyst Spike" && user[vars.inv][vars.n][214]) {
							bestSpike = 214;
							break;
						} else if (spike === "Diamond Spike" && user[vars.inv][vars.n][272]) {
							bestSpike = 272;
							break;
						} else if (spike === "Gold Spike" && user[vars.inv][vars.n][271]) {
							bestSpike = 271;
							break;
						} else if (spike === "Stone Spike" && user[vars.inv][vars.n][270]) {
							bestSpike = 270;
							break;
						} else if (spike === "Wood Spike" && user[vars.inv][vars.n][262]) {
							bestSpike = 262;
							break;
						} else if (spike === "Wood Wall" && user[vars.inv][vars.n][264]) {
							bestSpike = 264;
							break;
						}
					}
					if (bestSpike) {
						const pi2 = Math.PI * 2;
						let angle = Math.floor((255 * ((me.angle + pi2) % pi2)) / pi2);
						if (settings.AimBot.angle) angle = Math.floor((255 * ((settings.AimBot.angle + pi2) % pi2)) / pi2);
						client[vars.socket].send(JSON.stringify([packets.build, bestSpike, angle, 0]));
						if (settings.AutoSpike.mode) {
							for (let i = 15; i < 35; i += 3) {
								client[vars.socket].send(JSON.stringify([packets.build, bestSpike, angleCalculator(angle, i), 0]));
								client[vars.socket].send(JSON.stringify([packets.build, bestSpike, angleCalculator(angle, -i), 0]));
							}
						}
						settings.nows.autospike = timestamp;
					}
				}
			}

			if (!settings.AimBot.angle && !settings.AutoFarm.angle && !settings.AutoTame.angle && !settings.AutoEmerald.angle) user[vars.control][vars.update] = settings.AimBot.drawAngle;
		};
		Hack();
	},
};

var canvas = document.getElementById("game_canvas");
var ctx = canvas.getContext("2d");

// just functions and vars

ctx.drawImage = new Proxy(ctx.drawImage, {
	apply() {
		settings.Xray.enabled && (arguments[1].globalAlpha = 0.5);
		return Reflect.apply(...arguments);
	},
});

function ctxDrawImage(ctx, img, b, c, d, e, f, g, h, i) {
	if (i !== undefined) ctx.drawImage(img, b, c, Math.max(1, d), Math.max(1, e), f, g, h, i);
	else if (e !== undefined) ctx.drawImage(img, b, c, d, e);
	else ctx.drawImage(img, b, c);
}

function gaugesTranslate() {
	let translateY = 20;
	if (user[vars.inv][vars.can_select].length) translateY += 70;
	const units = world[vars.units];
	const me = world[vars.fast_units][user.id * world[vars.custormWorld]];
	if (me)
		for (const item of [
			...units[ITEMS.FURNACE],
			...units[ITEMS.CHEST],
			...units[ITEMS.BREAD_OVEN],
			...units[ITEMS.WINDMILL],
			...units[ITEMS.EXTRACTOR_MACHINE_STONE],
			...units[ITEMS.EXTRACTOR_MACHINE_GOLD],
			...units[ITEMS.EXTRACTOR_MACHINE_DIAMOND],
			...units[ITEMS.EXTRACTOR_MACHINE_AMETHYST],
			...units[ITEMS.EXTRACTOR_MACHINE_REIDITE],
			...units[ITEMS.EXTRACTOR_MACHINE_COPPER],
			...units[ITEMS.EXTRACTOR_MACHINE_IRON],
			...units[ITEMS.EXTRACTOR_MACHINE_TOPAZ],
			...units[ITEMS.EXTRACTOR_MACHINE_SAPPHIRE],
			...units[ITEMS.EXTRACTOR_MACHINE_JADE],
			...units[ITEMS.EXTRACTOR_MACHINE_RUBY],
			...units[ITEMS.EXTRACTOR_MACHINE_COAL],
			...units[ITEMS.EXTRACTOR_MACHINE_AQUAMARINE],
		])
			if (getdist(me, item) <= 100) {
				translateY += 60;
				break;
			}

	return -translateY;
}

function drawTimers() {
	(settings.Timers.globalAlpha >= 1 || settings.Timers.globalAlpha <= 0.2) && (settings.Timers.increamenter *= -1);
	settings.Timers.globalAlpha += settings.Timers.increamenter;

	const ctx = document.getElementById("game_canvas").getContext("2d");

	if (settings.WeatherInfo.enabled) {
		if (window2.blizard) {
			ctx.save();
			ctx.drawImage(BlizzardImage, innerWidth - 360, 230, 60, 60);
			ctx.restore();
		}
		if (window2.sandstorm) {
			ctx.save();
			ctx.drawImage(SandStormImage, innerWidth - 360, 290, 60, 60);
			ctx.restore();
		}
	}

	if (!settings.Timers.enabled) return;
	const me = world[vars.fast_units][user.id * world[vars.custormWorld]];
	// map x: innerwidth - 200
	// map y: innerheight - 310
	// map x2: innerwidth - 10
	// map y2: innerheight - 110

	// draw timer
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 6;
	ctx.strokeStyle = "#af352a";
	ctx.fillStyle = "white";
	ctx.font = "28px Baloo Paaji";
	ctx.strokeText((Math.floor(50 - (Date.now() - A) / 1e2) / 10).toFixed(1), innerWidth / 2 - 10, innerHeight + gaugesTranslate());
	ctx.fillText((Math.floor(50 - (Date.now() - A) / 1e2) / 10).toFixed(1), innerWidth / 2 - 10, innerHeight + gaugesTranslate());
	ctx.restore();

	// draw heal timer
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 6;
	ctx.strokeStyle = "#69a148";
	ctx.fillStyle = "white";
	ctx.font = "28px Baloo Paaji";
	ctx.strokeText((Math.floor(100 - (Date.now() - B) / 1e2) / 10).toFixed(1), innerWidth / 2 - 250, innerHeight + gaugesTranslate());
	ctx.fillText((Math.floor(100 - (Date.now() - B) / 1e2) / 10).toFixed(1), innerWidth / 2 - 250, innerHeight + gaugesTranslate());
	ctx.restore();

	// draw hp
	ctx.globalAlpha = gauges.hp >= 30 ? 1 : settings.Timers.globalAlpha;
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 6;
	ctx.fillStyle = "white";
	ctx.strokeStyle = "#69a148";
	// ctx.fillStyle = gauges.hp >= 30 ? "white" : "#db200b";
	// ctx.strokeStyle = gauges.hp >= 30 ? "#69a148" : "black";
	ctx.font = "35px Baloo Paaji";
	ctx.strokeText(gauges.hp * 2 + "hp", innerWidth / 2 - 370, innerHeight + gaugesTranslate() - 30);
	ctx.fillText(gauges.hp * 2 + "hp", innerWidth / 2 - 370, innerHeight + gaugesTranslate() - 30);
	ctx.restore();
	ctx.globalAlpha = 1;
	me && (me.hp = gauges.hp * 2);

	// draw food
	ctx.globalAlpha = gauges.food >= 30 ? 1 : settings.Timers.globalAlpha;
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 6;
	ctx.fillStyle = "white";
	ctx.strokeStyle = "#af352a";
	ctx.font = "35px Baloo Paaji";
	ctx.strokeText(gauges.food + "%", innerWidth / 2 - 140, innerHeight + gaugesTranslate() - 30);
	ctx.fillText(gauges.food + "%", innerWidth / 2 - 140, innerHeight + gaugesTranslate() - 30);
	ctx.restore();
	ctx.globalAlpha = 1;

	// draw temp
	ctx.globalAlpha = gauges.temp >= 30 ? 1 : settings.Timers.globalAlpha;
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 6;
	ctx.fillStyle = "white";
	ctx.strokeStyle = "#669bb1";
	ctx.font = "35px Baloo Paaji";
	ctx.strokeText(gauges.temp + (100 - gauges.heat) + "%", innerWidth / 2 + 100, innerHeight + gaugesTranslate() - 30);
	ctx.fillText(gauges.temp + (100 - gauges.heat) + "%", innerWidth / 2 + 100, innerHeight + gaugesTranslate() - 30);
	ctx.restore();
	ctx.globalAlpha = 1;

	// draw water
	ctx.globalAlpha = gauges.water >= 30 ? 1 : settings.Timers.globalAlpha;
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 6;
	ctx.fillStyle = "white";
	ctx.strokeStyle = "#074a87";
	ctx.font = "35px Baloo Paaji";
	ctx.strokeText(gauges.water + "%", innerWidth / 2 + 340, innerHeight + gaugesTranslate() - 30);
	ctx.fillText(gauges.water + "%", innerWidth / 2 + 340, innerHeight + gaugesTranslate() - 30);
	ctx.restore();
	ctx.globalAlpha = 1;
}

function drawFurnaceInfo(furnace) {
	const ctx = document.getElementById("game_canvas").getContext("2d");
	ctx.save();
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#fff";
	ctx.lineWidth = 7;
	ctx.font = "20px Baloo Paaji";
	ctx.strokeText(furnace.info + "x", user[vars.cam].x + furnace.x - 20, user[vars.cam].y + furnace.y);
	ctx.fillText(furnace.info + "x", user[vars.cam].x + furnace.x - 20, user[vars.cam].y + furnace.y);

	if (furnace.info) {
		if (furnace.oldInfo !== furnace.info) {
			furnace.oldInfo = furnace.info;
			furnace.time = Date.now() + furnace.info * 5e3;
		}
		const timeLeft = ((furnace.time - Date.now()) / 1e3).toFixed(1);
		if (timeLeft > 0) {
			ctx.strokeText(timeLeft + "s", user[vars.cam].x + furnace.x - 20, user[vars.cam].y + furnace.y + 20);
			ctx.fillText(timeLeft + "s", user[vars.cam].x + furnace.x - 20, user[vars.cam].y + furnace.y + 20);
		}
	}

	ctx.restore();
}
function drawWindmillInfo(windmill) {
	const wheatAmount = windmill.info & 0xff;
	const flourAmount = (windmill.info & 0xff00) >> 8;
	const ctx = document.getElementById("game_canvas").getContext("2d");

	ctx.save();
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#fff";
	ctx.lineWidth = 7;
	ctx.font = "20px Baloo Paaji";
	ctx.strokeText(wheatAmount + "x", user[vars.cam].x + windmill.x - 20, user[vars.cam].y + windmill.y - 5);
	ctx.fillText(wheatAmount + "x", user[vars.cam].x + windmill.x - 20, user[vars.cam].y + windmill.y - 5);

	ctx.strokeText(flourAmount + "x", user[vars.cam].x + windmill.x - 20, user[vars.cam].y + windmill.y + 15);
	ctx.fillText(flourAmount + "x", user[vars.cam].x + windmill.x - 20, user[vars.cam].y + windmill.y + 15);

	if (wheatAmount) {
		if (windmill.oldInfo !== windmill.info) {
			windmill.oldInfo = windmill.info;
			windmill.time = Date.now() + Math.min(255 - flourAmount, wheatAmount) * 5e3;
		}
		const timeLeft = ((windmill.time - Date.now()) / 1e3).toFixed(1);
		if (timeLeft > 0) {
			ctx.strokeText(timeLeft + "s", user[vars.cam].x + windmill.x - 20, user[vars.cam].y + windmill.y + 35);
			ctx.fillText(timeLeft + "s", user[vars.cam].x + windmill.x - 20, user[vars.cam].y + windmill.y + 35);
		}
	}

	ctx.restore();
}
function drawOvenInfo(oven) {
	// 10 seconds
	const woodAmount = oven.info & 0x1f;
	const flourAmount = (oven.info & 0x3e0) >> 5;
	const breadAmount = (oven.info & 0x7c00) >> 10;
	const ctx = document.getElementById("game_canvas").getContext("2d");
	ctx.save();
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#fff";
	ctx.lineWidth = 7;
	ctx.font = "20px Baloo Paaji";
	ctx.strokeText(woodAmount + "x", user[vars.cam].x + oven.x - 20, user[vars.cam].y + oven.y - 15);
	ctx.fillText(woodAmount + "x", user[vars.cam].x + oven.x - 20, user[vars.cam].y + oven.y - 15);

	ctx.strokeText(flourAmount + "x", user[vars.cam].x + oven.x - 20, user[vars.cam].y + oven.y + 5);
	ctx.fillText(flourAmount + "x", user[vars.cam].x + oven.x - 20, user[vars.cam].y + oven.y + 5);

	ctx.strokeText(breadAmount + "x", user[vars.cam].x + oven.x - 20, user[vars.cam].y + oven.y + 25);
	ctx.fillText(breadAmount + "x", user[vars.cam].x + oven.x - 20, user[vars.cam].y + oven.y + 25);

	if (woodAmount && flourAmount && breadAmount < 31) {
		if (oven.oldInfo !== oven.info) {
			oven.oldInfo = oven.info;
			oven.time = Date.now() + Math.min(31 - breadAmount, woodAmount, flourAmount) * 1e4;
		}
		const timeLeft = ((oven.time - Date.now()) / 1e3).toFixed(1);
		if (timeLeft > 0) {
			ctx.strokeText(timeLeft + "s", user[vars.cam].x + oven.x - 20, user[vars.cam].y + oven.y + 45);
			ctx.fillText(timeLeft + "s", user[vars.cam].x + oven.x - 20, user[vars.cam].y + oven.y + 45);
		}
	}

	ctx.restore();
}
function drawExtractorInfo(extractor) {
	const resourceAmount = (extractor.info & 65280) >> 8;
	const woodAmount = extractor.info & 255;
	const ctx = document.getElementById("game_canvas").getContext("2d");
	ctx.save();
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#fff";
	ctx.lineWidth = 7;
	ctx.font = "20px Baloo Paaji";

	ctx.strokeText(woodAmount + "x", user[vars.cam].x + extractor.x - 20, user[vars.cam].y + extractor.y - 10);
	ctx.fillText(woodAmount + "x", user[vars.cam].x + extractor.x - 20, user[vars.cam].y + extractor.y - 10);

	ctx.strokeText(resourceAmount + "x", user[vars.cam].x + extractor.x - 20, user[vars.cam].y + extractor.y + 10);
	ctx.fillText(resourceAmount + "x", user[vars.cam].x + extractor.x - 20, user[vars.cam].y + extractor.y + 10);

	if (woodAmount) {
		if (extractor.oldInfo !== extractor.info) {
			extractor.oldInfo = extractor.info;
			extractor.time = Date.now() + Math.min(255 - resourceAmount, woodAmount) * 5e3;
		}
		const timeLeft = ((extractor.time - Date.now()) / 1e3).toFixed(1);
		if (timeLeft > 0) {
			ctx.strokeText(timeLeft + "s", user[vars.cam].x + extractor.x - 20, user[vars.cam].y + extractor.y + 30);
			ctx.fillText(timeLeft + "s", user[vars.cam].x + extractor.x - 20, user[vars.cam].y + extractor.y + 30);
		}
	}

	ctx.restore();
}

function drawChestInfo(chest) {
	const ctx = document.getElementById("game_canvas").getContext("2d");
	const buttons = Object.entries(game).find(([key, value]) => Array.isArray(value) && value.undefined !== undefined)?.[0];
	const item = game[buttons][chest.action / 2 - 1]?.info;
	if (!item) return;
	const img = Object.values(item).find(Array.isArray)?.[0];
	ctx.save();
	ctx.globalAlpha = 0.9;

	if (img.tryLoadImg == undefined) {
		if (!vars.src) for (let e in img) if (typeof img[e] == "string" && img[e].includes("img/")) vars.src = e;

		img.tryLoadImg = 1;

		vars.src && img[vars.src] && (img.src = "img/" + img[vars.src].split("img/")[1].split("png")[0] + "png");
	}

	ctxDrawImage(ctx, img, user[vars.cam].x + chest.x - 33, user[vars.cam].y + chest.y - 25, 67, 52);
	ctx.globalAlpha = 1;
	ctx.font = "20px Baloo Paaji";
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.lineWidth = 7;
	ctx.strokeText(chest.action / 2 - 1, user[vars.cam].x + chest.x - 32, user[vars.cam].y + chest.y - 12);
	ctx.strokeText("x" + chest.info, user[vars.cam].x + chest.x - 32, user[vars.cam].y + chest.y + 20);

	ctx.fillStyle = "rgb(255,255,255)";
	ctx.fillText(chest.action / 2 - 1, user[vars.cam].x + chest.x - 32, user[vars.cam].y + chest.y - 12);
	ctx.fillText("x" + chest.info, user[vars.cam].x + chest.x - 32, user[vars.cam].y + chest.y + 20);
	ctx.restore();
}
function drawTotemInfo(totem) {
	const ctx = document.getElementById("game_canvas").getContext("2d");

	ctx.save();
	ctx.font = "20px Baloo Paaji";
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#fff";
	ctx.lineWidth = 7;

	let y = -10;

	ctx.strokeText(totem.info >= 16 ? "L" : "U", user[vars.cam].x + totem.x - 30, user[vars.cam].y + totem.y + y);
	ctx.fillText(totem.info >= 16 ? "L" : "U", user[vars.cam].x + totem.x - 30, user[vars.cam].y + totem.y + y);
	y += 25;

	const infoText = totem.info >= 16 ? totem.info % 16 : totem.info;

	ctx.strokeText(world[vars.players][totem[vars.pid]][vars.nickname], user[vars.cam].x + totem.x - 30, user[vars.cam].y + totem.y + y);
	ctx.fillText(world[vars.players][totem[vars.pid]][vars.nickname], user[vars.cam].x + totem.x - 30, user[vars.cam].y + totem.y + y);

	y += 25;
	ctx.strokeText(infoText, user[vars.cam].x + totem.x - 30, user[vars.cam].y + totem.y + y);
	ctx.fillText(infoText, user[vars.cam].x + totem.x - 30, user[vars.cam].y + totem.y + y);

	ctx.restore();
}
function drawBoxInfo(box) {
	const ctx = document.getElementById("game_canvas").getContext("2d");

	if (!box.hits) box.hits = 0;
	if (!box.time) box.time = Date.now() + (box.type == ITEMS.CRATE ? 16e3 : 24e4);
	if (!box.hp) box.hp = box.type == ITEMS.CRATE ? 30 : 300;

	// if (!box.hitState) box.hitState = false;

	// if (vars.hit && vars.hitten) {
	// 	if (box[vars.hit][vars.hitten] != box.hitState) {
	// 		box.hitState = box[vars.hit][vars.hitten];
	// 		box.hitState != false && (box.hits++, damage(box));
	// 	}
	// }

	ctx.save();
	ctx.font = "16px Baloo Paaji";
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#fff";
	ctx.lineWidth = 7;

	let y = -10;

	ctx.strokeText(box.hits, user[vars.cam].x + box.x - 5, user[vars.cam].y + box.y + y);
	ctx.fillText(box.hits, user[vars.cam].x + box.x - 5, user[vars.cam].y + box.y + y);
	y += 15;

	ctx.strokeText(((box.time - Date.now()) / 1e2 / 10).toFixed(1) + "s", user[vars.cam].x + box.x - 5, user[vars.cam].y + box.y + y);
	ctx.fillText(((box.time - Date.now()) / 1e2 / 10).toFixed(1) + "s", user[vars.cam].x + box.x - 5, user[vars.cam].y + box.y + y);
	y += 15;

	ctx.strokeText(box.type == ITEMS.CRATE ? "Drop" : "Dead", user[vars.cam].x + box.x - 5, user[vars.cam].y + box.y + y);
	ctx.fillText(box.type == ITEMS.CRATE ? "Drop" : "Dead", user[vars.cam].x + box.x - 5, user[vars.cam].y + box.y + y);
	y += 15;

	ctx.strokeText(box.hp + "💖", user[vars.cam].x + box.x - 5, user[vars.cam].y + box.y + y);
	ctx.fillText(box.hp + "💖", user[vars.cam].x + box.x - 5, user[vars.cam].y + box.y + y);
	ctx.restore();
}
function drawHp() {
	for (const type of [...mobs, ITEMS.PLAYERS])
		for (const entity of world[vars.units][type]) {
			if (!entity.hits) entity.hits = 0;
			if (!entity.hp) entity.hp = healthSettings[entity.type];

			if (entity.type == ITEMS.PLAYERS) {
				if (entity.bubbles.length) {
					entity.hp = healthSettings[entity.type];
					continue;
				}

				ctx.save();
				ctx.font = "20px Baloo Paaji";
				ctx.fillStyle = "#fff";
				ctx.strokeStyle = isAlly(entity) ? "#69a148" : "#af352a";
				ctx.lineWidth = 7;

				ctx.strokeText(entity.hp + "💖", user[vars.cam].x + entity.x - 35, user[vars.cam].y + entity.y + 55);
				ctx.fillText(entity.hp + "💖", user[vars.cam].x + entity.x - 35, user[vars.cam].y + entity.y + 55);
				ctx.restore();
				continue;
			}

			ctx.save();
			ctx.font = "20px Baloo Paaji";
			ctx.strokeStyle = "#000";
			ctx.fillStyle = "#fff";
			ctx.lineWidth = 7;

			ctx.strokeText(entity.hp + "💖", user[vars.cam].x + entity.x + 15, user[vars.cam].y + entity.y + 30);
			ctx.fillText(entity.hp + "💖", user[vars.cam].x + entity.x + 15, user[vars.cam].y + entity.y + 30);
			ctx.restore();
		}
}
function ghostTimers(p) {
	if (!p.bubbles.length) return (p.ghostTime = null);
	if (!p.ghostTime) p.ghostTime = Date.now() + 6e4;

	ctx.save();
	ctx.font = "24px Baloo Paaji";
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "#fff";
	ctx.lineWidth = 7;

	ctx.strokeText(((p.ghostTime - Date.now()) / 1e3).toFixed(1), user[vars.cam].x + p.x - 20, user[vars.cam].y + p.y + 12);
	ctx.fillText(((p.ghostTime - Date.now()) / 1e3).toFixed(1), user[vars.cam].x + p.x - 20, user[vars.cam].y + p.y + 12);
	ctx.restore();
}
function drawPull(p) {
	if (p.lastRight == undefined) return (p.lastRight = p.right);

	if (p.pullStart == undefined) p.pullStart = 0;

	const radius = 15;

	if (p.pullProgress == undefined) p.pullProgress = 0;
	const duration = 9800;

	const weaponsList = [
		167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 103, 0, 5, 6, 9, 48, 28, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 72, 12, 13, 14, 15, 60, 61, 18, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27,
	];

	if (p.right !== p.lastRight && weaponsList.includes(p.right)) {
		p.lastRight = p.right;
		p.pullStart = Date.now();
		return;
	}
	if (Date.now() - p.pullStart < 9800) {
		// draw cooldown

		const elapsed = Date.now() - p.pullStart;
		p.pullProgress = Math.min(elapsed / duration, 1);

		ctx.save();
		ctx.beginPath();
		ctx.arc(p.x + user[vars.cam].x + 50, p.y + user[vars.cam].y + 50, radius, -Math.PI / 2, -Math.PI / 2 + p.pullProgress * 2 * Math.PI);
		ctx.strokeStyle = "#fff";
		ctx.lineWidth = window.xd || 4;
		ctx.stroke();
		ctx.restore();
	} else p.pullProgress = 0;
	p.lastRight = p.right;
}
function healEntity(entity) {
	let amount = 30;
	if (entity[vars.clothe] == 150) amount = 40;

	if (200 - (entity.hp + amount) < 0) return (entity.hp = 200);

	entity.hp += amount;
}
function damage(entity) {
	// if (![ITEMS.CRATE, ITEMS.DEAD_BOX].includes(entity.type)) return;

	let damagers = [ITEMS.PLAYERS];
	if ([ITEMS.PLAYERS].includes(entity.type)) {
		damagers.push(ITEMS.WOLF);
		damagers.push(ITEMS.SPIDER);
		damagers.push(ITEMS.BOAR);
		damagers.push(ITEMS.HAWK);
		damagers.push(ITEMS.CRAB);
		damagers.push(ITEMS.CRAB_BOSS);
		damagers.push(ITEMS.PIRANHA);
		damagers.push(ITEMS.KRAKEN);
		damagers.push(ITEMS.DRAGON);
		damagers.push(ITEMS.LAVA_DRAGON);
		damagers.push(ITEMS.BABY_DRAGON);
		damagers.push(ITEMS.BABY_LAVA);
		damagers.push(ITEMS.FLAME);
		damagers.push(ITEMS.FOX);
		damagers.push(ITEMS.BEAR);
		damagers.push(ITEMS.MAMMOTH);
		damagers.push(ITEMS.VULTURE);
		damagers.push(ITEMS.SAND_WORM);
	}
	let gotDmg = false;

	for (const type of damagers)
		for (const p of world[vars.units][type]) {
			if (mobs.includes(entity.type)) {
				if (!(p.action & STATE.ATTACK) || !can_hit(p, entity)) continue;
				// if (![322, 208, 192, 64, 32].includes(p.action) || !can_hit(p, entity)) continue;
				const dmg = getDmg(p) || 0;
				// const dmg = getDmgtoMobs(p) || 0;
				gotDmg = true;
				entity.hp -= dmg > 0 ? dmg : 0;
			}

			if (p.type == ITEMS.PLAYERS) {
				if (![80, 82, 48].includes(p.action) || !can_hit(p, entity)) continue;

				if (entity.type == ITEMS.CRATE || entity.type == ITEMS.DEAD_BOX) {
					if (![322, 208, 192, 64, 32].includes(p.action) || !can_hit(p, entity)) continue;

					// const dmg = getDmgtoCrates(p) || 0;
					const dmg = getDmg(p) || 0;
					gotDmg = true;
					entity.hp -= dmg > 0 ? dmg : 0;
					continue;
				}

				const dmg = (getDmg(p) || 0) - (entity.type == ITEMS.PLAYERS ? getArmor(entity, p) : 0);
				entity.hp -= dmg > 0 ? dmg : 0;
				gotDmg = true;
			}

			// else {
			// 	if (![322, 208, 192, 64, 32].includes(p.action) || !can_hit(p, entity)) continue;

			// 	const dmg = (getDmg(p) || 0) - getArmor(entity, p);
			// 	gotDmg = true;
			// 	entity.hp -= dmg > 0 ? dmg : 0;
			// }
		}
	if (!gotDmg) environmentDmg(entity, false);
}
function getArmor(p, hitter) {
	let armor = 0;
	switch (p.right) {
		case 135:
			armor += 1; // Wood Shield
			break;
		case 136:
			armor += 2; // Stone Shield
			break;
		case 137:
			armor += 3; // Gold Shield
			break;
		case 138:
			armor += 4; // Diamond Shield
			break;
		case 139:
			armor += 5; // Amethyst Shield
			break;
		case 140:
			armor += 6; // Reidite Shield
			break;
	}
	switch (p[vars.clothe]) {
		case 104:
			armor += hitter.type == ITEMS.PLAYERS ? 1 : 4; // Wood Helmet
			break;
		case 34:
			armor += hitter.type == ITEMS.PLAYERS ? 2 : 8; // Stone Helmet
			break;
		case 35:
			armor += hitter.type == ITEMS.PLAYERS ? 4 : 13; // Gold Helmet
			break;
		case 36:
			armor += hitter.type == ITEMS.PLAYERS ? 5 : 19; // Diamond Helmet
			break;
		case 70:
			armor += hitter.type == ITEMS.PLAYERS ? 6 : 23; // Amethyst Helmet
			break;
		case 71:
			armor += hitter.type == ITEMS.PLAYERS ? 7 : 25; // Reidite Helmet
			break;
		case 105:
			armor += hitter.type == ITEMS.PLAYERS ? 8 : 27; // Dragon Helmet
			break;
		case 106:
			armor += hitter.type == ITEMS.PLAYERS ? 9 : 30; // Lava Helmet
			break;
		case 107:
			armor += hitter.type == ITEMS.PLAYERS ? 5 : 19; // Crab Helmet
			break;
		case 150:
			armor += hitter.type == ITEMS.PLAYERS ? 4 : 16; // Crown Green
			break;
		case 152:
			armor += hitter.type == ITEMS.PLAYERS ? 4 : 16; // Crown Blue
			break;
		case 151:
			armor += hitter.type == ITEMS.PLAYERS ? 4 : 16; // Crown Orange
			break;
		case 84:
			armor += hitter.type == ITEMS.PLAYERS ? 2 : 8; // Diving Suit
			break;
		case 83:
			armor += hitter.type == ITEMS.PLAYERS ? 4 : 16; // Super Diving Suit
			break;
		case 29:
			armor += hitter.type == ITEMS.PLAYERS ? 2 : 8; // Diamond Protection
			break;
		case 30:
			armor += hitter.type == ITEMS.PLAYERS ? 4 : 13; // Ame Protection
			break;
		case 31:
			armor += hitter.type == ITEMS.PLAYERS ? 6 : 19; // Red Protection
			break;

		case 37:
		case 45: // aqua helmet
		case 44: // coal helmet
		case 38: // copper helmet
		case 39: // Iron helmet
		case 40: // Idk helmet
		case 41: // blue helmet
		case 42: // Jade helmet
		case 43: // Ruby helmet
			armor += 0; // eme helmet
	}

	return armor;
}
function getDmg(p) {
	switch (p.type) {
		case ITEMS.PLAYERS:
			switch (p.right) {
				case 8:
					return 1; // Wood pickaxe
				case 1:
					return 2; // stone pickaxe
				case 3:
					return 3; // gold pickaxe
				case 4:
					return 4; // dia pickaxe
				case 47:
					return 5; // ame pickaxe
				case 48:
					return 6; // red pickaxe

				case 62:
					return 2; // stone hammer
				case 63:
					return 3; // gold hammer
				case 64:
					return 4; // dia hammer
				case 65:
					return 5; // ame hammer
				case 66:
					return 6; // red hammer
				case 72:
					return 12; // super hammer

				case 82:
					return 2; // stone shovel
				case 86:
					return 3; // gold shovel
				case 87:
					return 4; // dia shovel
				case 88:
					return 5; // ame shovel
				case 89:
					return 6; // red shovel

				case 46:
					return 1; // book
				case 85:
					return 1; // watercan
				case 99:
					return 0; // fork
				case 100:
					return 0; // golden fork
				case 101:
					return 1; // wrench
				case 102:
					return 5; // machete

				case 167:
					return 14; // Wood Axe
				case 168:
					return 21; // Stone Axe
				case 169:
					return 24; // Gold Axe
				case 170:
					return 27; // Diamond Axe
				case 171:
					return 30; // Amethyst Axe
				case 172:
					return 33; // Reidite Axe
				case 173: // Emerald Axe
				case 174: // Copper Axe
				case 175: // Iron Axe
				case 176: // idk Axe
				case 177: // blue Axe
				case 178: // Jade Axe
				case 179: // Ruby Axe
				case 180: // Coal Axe
				case 181: // Aquamarine Axe
					return 0;

				case 103:
					return 12; // Wood Sword
				case 0:
					return 19; // Stone Sword
				case 5:
					return 22; // Gold Sword
				case 6:
					return 24; // Diamond Sword
				case 9:
					return 24; // pirate Sword
				case 48:
					return 27; // Amethyst Sword
				case 28:
					return 30; // Reidite Sword
				case 108:
					return 30; // Dragon Sword
				case 109:
					return 33; // Lava Sword
				case 110:
					return 0; // Emerald Sword

				case 111: // Copper Sword
				case 112: // Iron Sword
				case 113: // idk Sword
				case 114: // blue Sword
				case 115: // Jade Sword
				case 116: // Ruby Sword
				case 117: // Coal Sword
				case 118: // idk Sword
				case 119: // Aquamarine Sword
					return 0;

				case 72:
					return 12; // Super Hammer
				// return "SWORD";
				case 12:
					return 10; // Wood Spear
				case 13:
					return 14; // Stone Spear
				case 14:
					return 15; // Gold Spear
				case 15:
					return 17; // Diamond Spear
				case 60:
					return 18; // Amethyst Spear
				case 61:
					return 22; // Reidite Spear
				case 18:
					return 14; // Crab Spear
				case 16:
					return 22; // Dragon Spear
				case 17:
					return 24; // Lava Spear
				case 19: // Emerald Spear
				case 20: // Copper Spear
				case 21: // Iron Spear
				case 22: // idk Spear
				case 23: // blue Spear
				case 24: // Jade Spear
				case 25: // Ruby Spear
				case 26: // Coal Spear
				case 27: // Aquamarine Spear
					return 0;

				case 9:
					return 24;
				// return "PIRATE";
			}
			break;

		case ITEMS.WOLF:
			return damageSettings[p.type];
		case ITEMS.SPIDER:
			return damageSettings[p.type];
		case ITEMS.BOAR:
			return damageSettings[p.type];
		case ITEMS.HAWK:
			return damageSettings[p.type];
		case ITEMS.CRAB:
			return damageSettings[p.type];
		case ITEMS.CRAB_BOSS:
			return damageSettings[p.type];
		case ITEMS.PIRANHA:
			return damageSettings[p.type];
		case ITEMS.KRAKEN:
			return damageSettings[p.type];
		case ITEMS.DRAGON:
			return damageSettings[p.type];
		case ITEMS.LAVA_DRAGON:
			return damageSettings[p.type];
		case ITEMS.BABY_DRAGON:
			return damageSettings[p.type];
		case ITEMS.BABY_LAVA:
			return damageSettings[p.type];
		case ITEMS.FLAME:
			return damageSettings[p.type];
		case ITEMS.FOX:
			return damageSettings[p.type];
		case ITEMS.BEAR:
			return damageSettings[p.type];
		case ITEMS.MAMMOTH:
			return damageSettings[p.type];
		case ITEMS.VULTURE:
			return damageSettings[p.type];
		case ITEMS.SAND_WORM:
			return damageSettings[p.type];
		default:
			break;
	}
}

function getDmgtoCrates(p) {
	switch (p.right) {
		case 8:
			return 1; // Wood pickaxe
		case 1:
			return 2; // stone pickaxe
		case 3:
			return 3; // gold pickaxe
		case 4:
			return 4; // dia pickaxe
		case 47:
			return 5; // ame pickaxe
		case 48:
			return 6; // red pickaxe

		case 62:
			return 2; // stone hammer
		case 63:
			return 3; // gold hammer
		case 64:
			return 4; // dia hammer
		case 65:
			return 5; // ame hammer
		case 66:
			return 6; // red hammer
		case 72:
			return 12; // super hammer

		case 82:
			return 2; // stone shovel
		case 86:
			return 3; // gold shovel
		case 87:
			return 4; // dia shovel
		case 88:
			return 5; // ame shovel
		case 89:
			return 6; // red shovel

		case 46:
			return 1; // book
		case 85:
			return 1; // watercan
		case 99:
			return 0; // fork
		case 100:
			return 0; // golden fork
		case 101:
			return 1; // wrench
		case 102:
			return 5; // machete

		case 167:
			return 28; // Wood Axe
		case 168:
			return 31; // Stone Axe
		case 169:
			return 34; // Gold Axe
		case 170:
			return 37; // Diamond Axe
		case 171:
			return 39; // Amethyst Axe
		case 172:
			return 42; // Reidite Axe
		case 173: // Emerald Axe
		case 174: // Copper Axe
		case 175: // Iron Axe
		case 176: // idk Axe
		case 177: // blue Axe
		case 178: // Jade Axe
		case 179: // Ruby Axe
		case 180: // Coal Axe
		case 181: // Aquamarine Axe
			return 0;

		case 103:
			return 12; // Wood Sword
		case 0:
			return 19; // Stone Sword
		case 5:
			return 22; // Gold Sword
		case 6:
			return 24; // Diamond Sword
		case 9:
			return 24; // pirate Sword
		case 48:
			return 27; // Amethyst Sword
		case 28:
			return 30; // Reidite Sword
		case 108:
			return 30; // Dragon Sword
		case 109:
			return 33; // Lava Sword
		case 110:
			return 0; // Emerald Sword

		case 111: // Copper Sword
		case 112: // Iron Sword
		case 113: // idk Sword
		case 114: // blue Sword
		case 115: // Jade Sword
		case 116: // Ruby Sword
		case 117: // Coal Sword
		case 118: // idk Sword
		case 119: // Aquamarine Sword
			return 0;

		case 72:
			return 12; // Super Hammer
		// return "SWORD";
		case 12:
			return 10; // Wood Spear
		case 13:
			return 14; // Stone Spear
		case 14:
			return 15; // Gold Spear
		case 15:
			return 17; // Diamond Spear
		case 60:
			return 18; // Amethyst Spear
		case 61:
			return 22; // Reidite Spear
		case 18:
			return 14; // Crab Spear
		case 16:
			return 22; // Dragon Spear
		case 17:
			return 24; // Lava Spear
		case 19: // Emerald Spear
		case 20: // Copper Spear
		case 21: // Iron Spear
		case 22: // idk Spear
		case 23: // blue Spear
		case 24: // Jade Spear
		case 25: // Ruby Spear
		case 26: // Coal Spear
		case 27: // Aquamarine Spear
			return 0;

		case 9:
			return 24;
		// return "PIRATE";
	}
}
function getDmgtoMobs(p) {
	switch (p.right) {
		case 8:
			return 1; // Wood pickaxe
		case 1:
			return 2; // stone pickaxe
		case 3:
			return 3; // gold pickaxe
		case 4:
			return 4; // dia pickaxe
		case 47:
			return 5; // ame pickaxe
		case 48:
			return 6; // red pickaxe

		case 62:
			return 2; // stone hammer
		case 63:
			return 3; // gold hammer
		case 64:
			return 4; // dia hammer
		case 65:
			return 5; // ame hammer
		case 66:
			return 6; // red hammer
		case 72:
			return 12; // super hammer

		case 82:
			return 2; // stone shovel
		case 86:
			return 3; // gold shovel
		case 87:
			return 4; // dia shovel
		case 88:
			return 5; // ame shovel
		case 89:
			return 6; // red shovel

		case 46:
			return 1; // book
		case 85:
			return 1; // watercan
		case 99:
			return 0; // fork
		case 100:
			return 0; // golden fork
		case 101:
			return 1; // wrench
		case 102:
			return 5; // machete

		case 167:
			return 14; // Wood Axe
		case 168:
			return 31; // Stone Axe
		case 169:
			return 34; // Gold Axe
		case 170:
			return 37; // Diamond Axe
		case 171:
			return 39; // Amethyst Axe
		case 172:
			return 42; // Reidite Axe

		// case 167:
		// 	return 24; // Wood Axe
		// case 168:
		// 	return 42; // Stone Axe
		// case 169:
		// 	return 48; // Gold Axe
		// case 170:
		// 	return 54; // Diamond Axe
		// case 171:
		// 	return 60; // Amethyst Axe
		// case 172:
		// 	return 66; // Reidite Axe
		case 173: // Emerald Axe
		case 174: // Copper Axe
		case 175: // Iron Axe
		case 176: // idk Axe
		case 177: // blue Axe
		case 178: // Jade Axe
		case 179: // Ruby Axe
		case 180: // Coal Axe
		case 181: // Aquamarine Axe
			return 0;

		case 103:
			return 12; // Wood Sword
		case 0:
			return 19; // Stone Sword
		case 5:
			return 22; // Gold Sword
		case 6:
			return 24; // Diamond Sword
		case 9:
			return 24; // pirate Sword
		case 48:
			return 27; // Amethyst Sword
		case 28:
			return 30; // Reidite Sword
		case 108:
			return 30; // Dragon Sword
		case 109:
			return 33; // Lava Sword
		case 110:
			return 0; // Emerald Sword

		case 111: // Copper Sword
		case 112: // Iron Sword
		case 113: // idk Sword
		case 114: // blue Sword
		case 115: // Jade Sword
		case 116: // Ruby Sword
		case 117: // Coal Sword
		case 118: // idk Sword
		case 119: // Aquamarine Sword
			return 0;

		case 72:
			return 12; // Super Hammer
		// return "SWORD";
		case 12:
			return 10; // Wood Spear
		case 13:
			return 14; // Stone Spear
		case 14:
			return 15; // Gold Spear
		case 15:
			return 17; // Diamond Spear
		case 60:
			return 18; // Amethyst Spear
		case 61:
			return 22; // Reidite Spear
		case 18:
			return 14; // Crab Spear
		case 16:
			return 22; // Dragon Spear
		case 17:
			return 24; // Lava Spear
		case 19: // Emerald Spear
		case 20: // Copper Spear
		case 21: // Iron Spear
		case 22: // idk Spear
		case 23: // blue Spear
		case 24: // Jade Spear
		case 25: // Ruby Spear
		case 26: // Coal Spear
		case 27: // Aquamarine Spear
			return 0;

		case 9:
			return 24;
		// return "PIRATE";
	}
}

function can_hit(hitter, target) {
	if (hitter.type == ITEMS.PLAYERS) {
		let maxRange;
		switch (holdingGearType(hitter)) {
			case "AXE":
				maxRange = 400 + 130;
				break;
			case "SWORD":
				maxRange = 400 + 160;
				break;
			case "SPEAR":
				maxRange = 400 + 233;
				break;
			case "PIRATE":
				maxRange = 400 + 170;
				break;
		}
		if (getdist(hitter, target) > maxRange) return false;

		const requiredAngleDiff = calcRequiredAngleDiff(hitter, target),
			pi2 = Math.PI * 2,
			rawAngle = calcAngle(hitter, target, true),
			targetAngle = Math.floor((255 * ((rawAngle + pi2) % pi2)) / pi2);

		const diff = Math.abs(targetAngle - Math.floor((255 * ((hitter.angle + pi2) % pi2)) / pi2));
		const angleDiff = Math.min(diff, 255 - diff);

		return angleDiff > requiredAngleDiff + 15 ? false : true;
	} else {
		const dist = getdist(hitter, target);
		switch (hitter.type) {
			case ITEMS.WOLF:
				if (dist > 80) return false;
				break;
			case ITEMS.SPIDER:
				if (dist > 100) return false;
				break;
			case ITEMS.BOAR:
				if (dist > 80) return false;
				break;
			case ITEMS.HAWK:
				if (dist > 80) return false;
				break;
			case ITEMS.CRAB:
				if (dist > 80) return false;
				break;
			case ITEMS.CRAB_BOSS:
				if (dist > 100) return false;
				break;
			case ITEMS.PIRANHA:
				if (dist > 100) return false;
				break;
			case ITEMS.KRAKEN:
				if (dist > 140) return false;
				break;
			case ITEMS.DRAGON:
				if (dist > 140) return false;
				break;
			case ITEMS.LAVA_DRAGON:
				if (dist > 140) return false;
				break;
			case ITEMS.BABY_DRAGON:
				if (dist > 100) return false;
				break;
			case ITEMS.BABY_LAVA:
				if (dist > 100) return false;
				break;
			case ITEMS.FLAME:
				if (dist > 80) return false;
				break;
			case ITEMS.FOX:
				if (dist > 80) return false;
				break;
			case ITEMS.BEAR:
				if (dist > 80) return false;
				break;
			case ITEMS.MAMMOTH:
				if (dist > 120) return false;
				break;
			case ITEMS.VULTURE:
				if (dist > 100) return false;
				break;
			case ITEMS.SAND_WORM:
				if (dist > 100) return false;
				break;
		}
		return true;
	}
}
function calcRequiredAngleDiff(hitter, target) {
	const dist = getdist(hitter, target);

	switch (holdingGearType(hitter)) {
		case "AXE":
			if (dist > 120) return 28;
			if (dist > 110) return 35;
			if (dist > 100) return 43;
			if (dist > 90) return 50;
			if (dist > 80) return 58;
			if (dist > 70) return 66;
			if (dist > 60) return 73;
			if (dist > 50) return 81;
			if (dist > 40) return 88;
			if (dist > 30) return 96;
			if (dist > 20) return 103;
			if (dist > 10) return 111;
			break;
		case "SWORD":
			if (dist > 160) return 15;
			if (dist > 150) return 20;
			if (dist > 140) return 26;
			if (dist > 130) return 32;
			if (dist > 120) return 38;
			if (dist > 110) return 43;
			if (dist > 100) return 49;
			if (dist > 90) return 55;
			if (dist > 80) return 61;
			if (dist > 70) return 66;
			if (dist > 60) return 72;
			if (dist > 50) return 78;
			if (dist > 40) return 84;
			if (dist > 30) return 89;
			if (dist > 20) return 95;
			if (dist > 10) return 101;
			break;
		case "SPEAR":
			if (dist > 225) return 5;
			if (dist > 220) return 10;
			if (dist > 210) return 13;
			if (dist > 200) return 17;
			if (dist > 190) return 21;
			if (dist > 180) return 25;
			if (dist > 170) return 29;
			if (dist > 160) return 33;
			if (dist > 150) return 35;
			if (dist > 140) return 38;
			if (dist > 130) return 41;
			if (dist > 120) return 43;
			if (dist > 110) return 45;
			if (dist > 100) return 47;
			if (dist > 90) return 49;
			if (dist > 80) return 51;
			if (dist > 70) return 54;
			if (dist > 60) return 56;
			if (dist > 50) return 58;
			if (dist > 40) return 60;
			if (dist > 30) return 62;
			if (dist > 25) return 0;
			break;
		case "PIRATE":
			if (dist > 160) return 17;
			if (dist > 150) return 22;
			if (dist > 140) return 28;
			if (dist > 130) return 34;
			if (dist > 120) return 40;
			if (dist > 110) return 45;
			if (dist > 100) return 51;
			if (dist > 90) return 57;
			if (dist > 80) return 63;
			if (dist > 70) return 68;
			if (dist > 60) return 74;
			if (dist > 50) return 80;
			if (dist > 40) return 86;
			if (dist > 30) return 91;
			if (dist > 20) return 97;
			if (dist > 10) return 105;
			break;
	}
}

function environmentDmg(entity, damageType) {
	/*
	// fire
	// spike
	// blizard
	// sandstorm
	heat
	// cold
	// hunger
	// thirst
	// drowning
	*/
	if (entity.type !== ITEMS.PLAYERS) return;

	if (damageType) {
		let damage = 20;
		switch (damageType) {
			case "cold":
				if (isInWinter(entity)) damage += 20;
				return (entity.hp -= damage);
			case "hunger":
			case "drowning":
				damage = 40;
				return (entity.hp -= damage);
			case "thirst":
				return (entity.hp -= damage);

			default:
				break;
		}
	}

	if (!entity.spikeDmg) entity.spikeDmg = 0;
	if (!entity.fireDmg) entity.fireDmg = 0;
	if (!entity.blizardDmg) entity.blizardDmg = 0;
	if (!entity.sandStormDmg) entity.sandStormDmg = 0;
	if (!entity.heatDmg) entity.heatDmg = 0;
	if (!entity.coldDmg) entity.coldDmg = 0;
	if (!entity.hungerDmg) entity.hungerDmg = 0;
	if (!entity.thirstDmg) entity.thirstDmg = 0;
	if (!entity.drowningDmg) entity.drowningDmg = 0;

	const units = world[vars.units];

	// firecamp dmg
	for (const fire of [...units[ITEMS.FIRE], ...units[ITEMS.BIG_FIRE]]) {
		if (getdist(entity, fire) < 50 && Date.now() > entity.fireDmg) {
			entity.fireDmg = Date.now() + 2e3;
			entity.hp -= 40;
		}
	}
	// spike dmg
	for (const spike of [
		...units[ITEMS.SPIKE],
		...units[ITEMS.STONE_SPIKE],
		...units[ITEMS.GOLD_SPIKE],
		...units[ITEMS.DIAMOND_SPIKE],
		...units[ITEMS.AMETHYST_SPIKE],
		...units[ITEMS.REIDITE_SPIKE],
		...units[ITEMS.WOOD_DOOR_SPIKE],
		...units[ITEMS.STONE_DOOR_SPIKE],
		...units[ITEMS.GOLD_DOOR_SPIKE],
		...units[ITEMS.DIAMOND_DOOR_SPIKE],
		...units[ITEMS.AMETHYST_DOOR_SPIKE],
		...units[ITEMS.REIDITE_DOOR_SPIKE],
	])
		if (getdist(entity, spike) < 100 && Date.now() > entity.spikeDmg) {
			entity.spikeDmg = Date.now() + 1e2;
			entity.hp -= getSpikeDmg(spike.type);
		}

	// blizard Dmg
	if (window2.blizard && Date.now() > entity.blizardDmg && isInWinter(entity)) {
		entity.blizardDmg = Date.now() + 4e3;
		entity.hp -= getBlizardDmg(entity);
	}

	// sandStorm Dmg
	if (window2.sandStormDmg && Date.now() > entity.sandStormDmg && isInDesert(entity)) {
		entity.sandStormDmg = Date.now() + 4e3;
		entity.hp -= getSandStormDmg(entity);
	}
}
function getSpikeDmg(type) {
	switch (type) {
		case ITEMS.REIDITE_SPIKE:
			return 60;
		case ITEMS.AMETHYST_SPIKE:
			return 50;
		case ITEMS.DIAMOND_SPIKE:
			return 40;
		case ITEMS.GOLD_SPIKE:
			return 30;
		case ITEMS.STONE_SPIKE:
			return 20;
		case ITEMS.SPIKE:
			return 10;

		case ITEMS.REIDITE_DOOR_SPIKE:
			return 35;
		case ITEMS.AMETHYST_DOOR_SPIKE:
			return 30;
		case ITEMS.DIAMOND_DOOR_SPIKE:
			return 25;
		case ITEMS.GOLD_DOOR_SPIKE:
			return 15;
		case ITEMS.STONE_DOOR_SPIKE:
			return 10;
		case ITEMS.WOOD_DOOR_SPIKE:
			return 5;

		default:
			break;
	}
}
function getBlizardDmg(entity) {
	let dmg = 24;
	switch (entity[vars.clothe]) {
		case 10: // ear muffs
			return (dmg -= 8);
		case 11: // chapka
			return (dmg -= 12);
		case 67: // scarf
			return (dmg -= 16);
		case 155: // pilot
			return (dmg -= 12);
		case 156: // hood
			return (dmg -= 8);
		case 157: // peasant
			return (dmg -= 8);
		case 158: // winter hood
			return (dmg -= 12);
		case 159: // winter peasant
			return (dmg -= 12);
		case 161: // Mamoth hat
			return (dmg -= 20);
		default:
			return dmg;
	}
}
function getSandStormDmg(entity) {
	let dmg = 16;
	switch (entity[vars.clothe]) {
		case 153: // turban
			return (dmg = 7);

		case 154: // ninja
			return (dmg = 2);

		case 155: // pilot
			return (dmg = 2);

		default:
			return dmg;
	}
}
function isInDesert(entity) {
	// Your position is 140:180
	// Your position is 220:290
	const Desert = { x1: 140, y1: 180, x2: 220, y2: 290 };
	return isPointInRange(entity.x, entity.y, Desert.x1, Desert.y1, Desert.x2, Desert.y2);
}
function isInWinter(entity) {
	// Your position is 5:5
	// Your position is 95:145
	const Winter = { x1: 95, y1: 145, x2: 5, y2: 5 };
	return isPointInRange(entity.x, entity.y, Winter.x1, Winter.y1, Winter.x2, Winter.y2);
}

function get_mouse_pos(evt) {
	return {
		x: evt.clientX,
		y: evt.clientY,
	};
}
document.addEventListener("mousemove", (e) => (mouse.pos = get_mouse_pos(e)));
function angleCalculator(a, b) {
	let angle;
	if (a + b > 254) {
		angle = a + b - 254;
	}
	if (a + b < 0) {
		angle = 254 + (a + b);
	}
	if (a + b >= 0 && a + b < 254) {
		angle = a + b;
	}
	return angle;
}

function holdingGearType(me) {
	if (!me || me.right == undefined) return;
	switch (me.right) {
		case 167: // Wood Axe
		case 168: // Stone Axe
		case 169: // Gold Axe
		case 170: // Diamond Axe
		case 171: // Amethyst Axe
		case 172: // Reidite Axe
		case 173: // Emerald Sword
		case 174: // Copper Sword
		case 175: // Iron Sword
		case 176: // idk Sword
		case 177: // blue Sword
		case 178: // Jade Sword
		case 179: // Ruby Sword
		case 180: // Coal Sword
		case 181: // Aquamarine Sword
			return "AXE";
		case 103: // Wood Sword
		case 0: // Stone Sword
		case 5: // Gold Sword
		case 6: // Diamond Sword
		case 48: // Amethyst Sword
		case 28: // Reidite Sword
		case 108: // Dragon Sword
		case 109: // Lava Sword
		case 110: // Emerald Sword
		case 111: // Copper Sword
		case 112: // Iron Sword
		case 113: // idk Sword
		case 114: // blue Sword
		case 115: // Jade Sword
		case 116: // Ruby Sword
		case 117: // Coal Sword
		case 118: // idk Sword
		case 119: // Aquamarine Sword
		case 72: // Super Hammer
			return "SWORD";
		case 12: // Wood Spear
		case 13: // Stone Spear
		case 14: // Gold Spear
		case 15: // Diamond Spear
		case 60: // Amethyst Spear
		case 61: // Reidite Spear
		case 18: // Crab Spear
		case 16: // Dragon Spear
		case 17: // Lava Spear
		case 19: // Emerald Spear
		case 20: // Copper Spear
		case 21: // Iron Spear
		case 22: // idk Spear
		case 23: // blue Spear
		case 24: // Jade Spear
		case 25: // Ruby Spear
		case 26: // Coal Spear
		case 27: // Aquamarine Spear
			return "SPEAR";
		case 9:
			return "PIRATE";
	}
}

function findTarget(a, b, c) {
	for (const p of b) {
		if (!isAlly(p) && getdist(a, p) <= c && ((p[vars.fly] && a[vars.fly]) || (!p[vars.fly] && !a[vars.fly]))) return p;
	}
}

function findClosestSeed(a, b, c) {
	for (let i = 0; i < b.length; i++) {
		if (b[i].info && b[i].info != 16 && b[i].info != 10) {
			const distance = getdist(a, b[i]);
			if (distance <= c && distance >= 50) {
				if (closest) {
					if (distance < getdist(closest, a)) {
						closest = b[i];
					}
				} else var closest = b[i];
			}
		}
	}
	return closest;
}

function findClosestSeed2(a, b, c) {
	for (let i = 0; i < b.length; i++) {
		if (b[i].info && b[i].info == 16) {
			const distance = getdist(a, b[i]);
			if (distance <= c) {
				if (closest) {
					if (distance < getdist(closest, a)) {
						closest = b[i];
					}
				} else var closest = b[i];
			}
		}
	}
	return closest;
}

function Pathfinde(me, Nearest) {
	let y1 = me.y;
	let x1 = me.x;
	let x2 = Nearest ? Nearest.x : gauges;
	let y2 = Nearest ? Nearest.y : 0;
	let Pathfind = 0;
	if (y1 < y2 - 25 && Nearest) {
		Pathfind += 4;
	}
	if (y1 > y2 + 25 && Nearest) {
		Pathfind += 8;
	}
	if (x1 < x2 - 25) {
		Pathfind += 2;
	}
	if (x1 > x2 + 25) {
		Pathfind += 1;
	}
	return Pathfind;
}

function Pathfinde2(me, x, y) {
	let Pathfind = 0;

	let x1 = me.x,
		y1 = me.y,
		x2 = x,
		y2 = y;

	x1 >= 1e3 && (x1 = Math.floor(me.x / 100));
	y1 >= 1e3 && (y1 = Math.floor(me.y / 100));
	x2 >= 1e3 && (x2 = Math.floor(x / 100));
	y2 >= 1e3 && (y2 = Math.floor(y / 100));

	if (x1 > x2) Pathfind |= 1;
	else if (x1 < x2) Pathfind |= 2;

	if (y1 > y2) Pathfind |= 8;
	else if (y1 < y2) Pathfind |= 4;

	return Pathfind;
}

function calcAngle(_, $, o) {
	return _ && $ ? (o ? Math.atan2($.r.y - _.r.y, $.r.x - _.r.x) : Math.atan2($.y - _.y, $.x - _.x)) : null;
}

function getBestHammer() {
	if (user[vars.inv][vars.n][12]) return 12;
	if (user[vars.inv][vars.n][6]) return 6;
	if (user[vars.inv][vars.n][5]) return 5;
	if (user[vars.inv][vars.n][4]) return 4;
	if (user[vars.inv][vars.n][3]) return 3;
	if (user[vars.inv][vars.n][2]) return 2;
	return 7;
}

function isPointInRange(x, y, x1, y1, x2, y2) {
	if (x1 > x2) [x1, x2] = [x2, x1];

	if (y1 > y2) [y1, y2] = [y2, y1];

	return x >= x1 && x <= x2 && y >= y1 && y <= y2;
}

function getBestFood() {
	if (!vars.inv || !vars.n) return null;
	if (user[vars.inv][vars.n][229]) return 229; // cake
	if (user[vars.inv][vars.n][226]) return 226; // cookie
	if (user[vars.inv][vars.n][298]) return 298; // crab meat
	if (user[vars.inv][vars.n][299]) return 299; // crab hands
	if (user[vars.inv][vars.n][231]) return 231; // cooked fish
	if (user[vars.inv][vars.n][208]) return 208; // cooked meat
	if (user[vars.inv][vars.n][201]) return 201; // berry
	if (user[vars.inv][vars.n][315]) return 315; // carrot
	if (user[vars.inv][vars.n][317]) return 317; // tomato
	if (user[vars.inv][vars.n][319]) return 319; // water melon
	if (user[vars.inv][vars.n][294]) return 294; // garlic
	if (user[vars.inv][vars.n][291]) return 291; // pumpkin
	if (user[vars.inv][vars.n][236]) return 236; // bread
	// if (user[vars.inv][vars.n][230]) return 230; // raw fish
	// if (user[vars.inv][vars.n][207]) return 207; // raw meat
	return null;
}
function checkIce() {
	if (100 - gauges.heat >= 95 && settings.AutoIce.enabled) client[vars.socket].send(JSON.stringify([packets.equip, 235]));
}
function eatFood(hunger = gauges.food) {
	const food = getBestFood();
	if (hunger < 40 && food) client[vars.socket].send(JSON.stringify([packets.equip, food]));
}

function updateUnits(data, ui8, hard_refresh) {
	var ui16 = new Uint16Array(data);

	var len = (ui8.length - 2) / 20;
	for (var i = 0; i < len; i++) {
		var k8 = 2 + i * 20;
		var k16 = 1 + 10 * i;
		var pid = ui8[k8];
		var idk = ui16[k16 + 5];
		var id = world[vars.custormWorld] * pid + idk;

		var action = ui16[k16 + 1];

		// for (const e in healthSettings) world[vars.fast_units][id] && ITEMS[e] == world[vars.fast_units][id].type && log(action);

		const entity = world[vars.fast_units][id];
		if (!entity) return;
		entity.customPid = id;

		// settings.sharedUnits.update();
		if (action & STATE.HURT) {
			if (entity.type == ITEMS.SAND_WORM && (entity.info & 1) !== 1) return;
			entity.hits++;
			damage(entity);
		} else if ([6, 7, 22, 23, 38, 39, 54, 55, 70, 71, 86, 87].includes(action)) environmentDmg(entity, "drowning");
		else if (action & STATE.COLD) environmentDmg(entity, "cold");
		else if (action & STATE.HUNGER) environmentDmg(entity, "hunger");
		else {
			entity && entity.type == ITEMS.PLAYERS && action & STATE.HEAL && healEntity(entity);
			/*
			hurt
			2 3 18 19 34 35 50 51 66 67 82 83

			drown
			6, 7, 22, 23, 38, 39, 54, 55, 70, 71, 86, 87

			thirst cold
			4, 5, 20, 21, 22, 36, 37, 52, 53, 68, 69, 84, 85

			food
			8, 9, 24, 25, 40, 41, 56, 57, 72, 73, 88, 89
			*/
		}
	}
}
function getdist(a, b) {
	return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
}

function isAlly(object) {
	return user.id === object[vars.pid] || user[vars.team].includes(object[vars.pid]);
}
function kill_player(id) {
	if (!world[vars.players]) return;

	settings.JoinLeaves.leave.push({ id: id, name: world[vars.players][id][vars.nickname] });

	if (settings.JoinLeaves.leave.length > 4) settings.JoinLeaves.leave.shift();
	settings.nows.joinleaves = Date.now();
}
function new_player([pType, id, nickname, level, skin, accessory, bag, book]) {
	settings.JoinLeaves.join.push({ id: id, name: nickname, level: level, skin: skin, accessory: accessory });

	if (settings.JoinLeaves.join.length > 4) settings.JoinLeaves.join.shift();
	settings.nows.joinleaves = Date.now();
}

function coloredSpikes() {
	for (let e in window) {
		if (!Array.isArray(window[e]) || chars.includes(e[0])) continue;
		if (window[e].length > 1000 && window[e].length < 2000) window2.sprite = window[e];
	}
	// for (let e in window) {
	// 	if (!Array.isArray(window[e]) || chars.includes(e[0])) continue;
	// 	if (window[e].length > 2500 && window[e].length < 3500) vars.fast_units = e;
	// }

	if (!window2.sprite) return setTimeout(coloredSpikes, 1000);

	let rs = new Image();
	rs.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-reidite-spike-ally.png";
	let rss = new Image();
	rss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-amethyst-spike-ally.png";
	let rsss = new Image();
	rsss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-diamond-spike-ally.png";
	let rssss = new Image();
	rssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-gold-spike-ally.png";
	let rsssss = new Image();
	rsssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-stone-spike-ally.png";
	let rssssss = new Image();
	rssssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-wood-spike-ally.png";

	let rsssssss = new Image();
	rsssssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-reidite-spike-enemy.png";
	let rssssssss = new Image();
	rssssssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-amethyst-spike-enemy.png";
	let rsssssssss = new Image();
	rsssssssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-diamond-spike-enemy.png";
	let rssssssssss = new Image();
	rssssssssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-gold-spike-enemy.png";
	let rsssssssssss = new Image();
	rsssssssssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-stone-spike-enemy.png";
	let rssssssssssss = new Image();
	rssssssssssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-wood-spike-enemy.png";

	let xs = new Image();
	xs.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-reidite-spike-door-ally.png";
	let xss = new Image();
	xss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-amethyst-spike-door-ally.png";
	let xsss = new Image();
	xsss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-diamond-spike-door-ally.png";
	let xssss = new Image();
	xssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-gold-spike-door-ally.png";
	let xsssss = new Image();
	xsssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-stone-spike-door-ally.png";
	let xssssss = new Image();
	xssssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-wood-spike-door-ally.png";

	let xsssssss = new Image();
	xsssssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-reidite-spike-door-enemy.png";
	let xssssssss = new Image();
	xssssssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-amethyst-spike-door-enemy.png";
	let cs = new Image();
	cs.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-diamond-spike-door-enemy.png";
	let css = new Image();
	css.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-gold-spike-door-enemy.png";
	let csss = new Image();
	csss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-stone-spike-door-enemy.png";
	let cssss = new Image();
	cssss.src = "https://raw.githubusercontent.com/XmreLoux/For_require/main/images/day-wood-spike-door-enemy.png";

	let csssss = new Image();
	csssss.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_reidite2.png";
	let yt = new Image();
	yt.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_amethyst1.png";
	let ytt = new Image();
	ytt.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_diamond2.png";
	let yttt = new Image();
	yttt.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_gold2.png";
	let uii = new Image();
	uii.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_stone1.png";
	let nn = new Image();
	nn.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_wood2.png";

	let ii = new Image();
	ii.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_reidite1.png";
	let gg = new Image();
	gg.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_amethyst2.png";
	let ee = new Image();
	ee.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_diamond1.png";
	let rrs = new Image();
	rrs.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_gold1.png";
	let ff = new Image();
	ff.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_stone2.png";
	let rr = new Image();
	rr.src = "https://raw.githubusercontent.com/XmreLoux/images/main/door_wood1.png";

	window2.sprite[10000] = [rs, rs];
	window2.sprite[10001] = [rsssssss, rsssssss];

	window2.sprite[10002] = [rss, rss];
	window2.sprite[10003] = [rssssssss, rssssssss];

	window2.sprite[10004] = [rsss, rsss];
	window2.sprite[10005] = [rsssssssss, rsssssssss];

	window2.sprite[10006] = [rssss, rssss];
	window2.sprite[10007] = [rssssssssss, rssssssssss];

	window2.sprite[10008] = [rsssss, rsssss];
	window2.sprite[10009] = [rsssssssssss, rsssssssssss];

	window2.sprite[10010] = [rssssss, rssssss];
	window2.sprite[10011] = [rssssssssssss, rssssssssssss];

	window2.sprite[10012] = [xssssss, xssssss];
	window2.sprite[10013] = [cssss, cssss];

	window2.sprite[10014] = [xsssss, xsssss];
	window2.sprite[10015] = [csss, csss];

	window2.sprite[10016] = [xssss, xssss];
	window2.sprite[10017] = [css, css];

	window2.sprite[10018] = [xsss, xsss];
	window2.sprite[10019] = [cs, cs];

	window2.sprite[10020] = [xss, xss];
	window2.sprite[10021] = [xssssssss, xssssssss];

	window2.sprite[10022] = [xs, xs];
	window2.sprite[10023] = [xsssssss, xsssssss];

	window2.sprite[10024] = [nn, nn];
	window2.sprite[10025] = [rr, rr];

	window2.sprite[10026] = [uii, uii];
	window2.sprite[10027] = [ff, ff];

	window2.sprite[10028] = [yttt, yttt];
	window2.sprite[10029] = [rrs, rrs];

	window2.sprite[10030] = [ytt, ytt];
	window2.sprite[10031] = [ee, ee];

	window2.sprite[10032] = [yt, yt];
	window2.sprite[10033] = [gg, gg];

	window2.sprite[10034] = [csssss, csssss];
	window2.sprite[10035] = [ii, ii];

	const chestLocked = new Image();
	const chestOpen = new Image();

	chestLocked.src = "https://raw.githubusercontent.com/Aymen-Braikia/sprite/refs/heads/main/chestR%20(2).png";
	chestOpen.src = "https://raw.githubusercontent.com/Aymen-Braikia/sprite/refs/heads/main/chestG.png";

	window2.sprite[10100] = [chestLocked, chestLocked];
	window2.sprite[10101] = [chestOpen, chestOpen];
}

const packetHandler = (e) => {
	if ("string" == typeof e.data) {
		if (3 === JSON.parse(e.data)[0]) {
			A = Date.now();
			B = Date.now();
			heal = false;
			user.alive = true;
		} else if (2 === JSON.parse(e.data)[0]) new_player(JSON.parse(e.data));
	}
};
let heal = false;

const packetHandler2 = (t, lol) => {
	if (typeof t == "object") {
		switch (t[0]) {
			case 0:
				updateUnits(t.buffer, t, false);
				// var len = (ui8.length - 1) / 3;
				// for (var i = 0; i < len; i++) {
				// 	var id = (ui8[3 + 3 * i] << 8) | ui8[2 + 3 * i];
				// 	// var angle = (ui8[1 + 3 * i] / 255) * PI2M;

				// 	world[fast_units][id].hits++;
				// 	damage(world[fast_units][id]);
				// }
				break;

			case 11:
			case 50:
				if (Date.now() - settings.nows.updateInv < 200) return false;
				break;
			case 15:
				kill_player(t[1]);
				break;
			case 16:
				A = Date.now();
				eatFood(t[2]);
				checkIce(t[6]);
				if (t[4] < 50) client[vars.socket].send(JSON.stringify([packets.equip, 218]));

				if (heal) B = Date.now();
				heal = !heal;
				gauges = { hp: t[1], food: t[2], temp: t[3], water: t[4], air: t[5], heat: t[6] };

				client.ping();
				break;
			case 17:
				var ui16 = new Uint16Array(t);

				user[vars.cam][vars.change](ui16[1], ui16[2]);
				break;
			case 25:
				user.alive = false;
				// if (settings.AutoRespawn.enabled) {
				// 	setTimeout(() => UI[vars.connect3](client.connect), 1000);
				// 	return false;
				// }

				break;
			case 28:
				user.ghost.enabled = true;
				break;
			case 29:
				user.ghost.enabled = false;
				break;
			case 37:
				gauges.hp < t[1] && ((B = Date.now()), (heal = !heal));
				gauges && (gauges.hp = t[1]);
				break;
			case 38:
				gauges && (gauges.food = t[1]);
				break;
			case 39:
				gauges && (gauges.water = t[1]);
				break;
			case 55:
				gauges && (gauges.heat = t[1]);
				break;
			case 56:
				gauges && (gauges.temp = t[1]);
				break;
			case 48:
				if (settings.AutoEmerald.enabled) {
					emerald.i += 1;
					if (emerald.i > 3) emerald.i = 1;
				}
				break;
			case 59:
				// B = Date.now();
				break;
			case 68:
				window2.sandstorm = t[1];
				break;
			case 69:
				window2.blizard = t[1];
				break;
		}
	}
	return true;
};

function removeAds() {
	try {
		document.querySelector(".grecaptcha-badge").style.display = "none";
		document.querySelector("#trevda").style.display = "none";
	} catch {
		setTimeout(removeAds, 3000);
	}
}
removeAds();

// vars
let gauges = { hp: 100, food: 100, temp: 100, water: 100, air: 100, heat: 0 };
let A = Date.now();
let B = Date.now();
let COUNTER = 0;

const packets = {
	focus: 29,
	recoverFocus: 17,

	build: 17,
	extPut: 11,
	extTake: 21,
	ovenPutWood: 36,
	drop: 27,
	attack: 19,
	stopAttack: 38,
	ping: 15,
	angle: 10,
	unlock: 7,
	chestPut: 24,
	chestTake: 9,
	lock: 8,
	equip: 33,
	craft: 13,
	recycle: 31,
	joinTotem: 12,
	leaveTotem: 23,
	windMillPut: 37,
	windMillTake: 20,
	move: 14,
	ovenPutFlour: 1,
	ovenTake: 25,
	revive: 30,

	// out dated
};
const INV = {
	SWORD: COUNTER++,
	PICK: COUNTER++,
	FUR: COUNTER++,
	PICK_GOLD: COUNTER++,
	PICK_DIAMOND: COUNTER++,
	SWORD_GOLD: COUNTER++,
	SWORD_DIAMOND: COUNTER++,
	HAND: COUNTER++,
	PICK_WOOD: COUNTER++,
	PIRATE_SWORD: COUNTER++,
	EARMUFFS: COUNTER++,
	COAT: COUNTER++,
	WOOD_SPEAR: COUNTER++,
	SPEAR: COUNTER++,
	GOLD_SPEAR: COUNTER++,
	DIAMOND_SPEAR: COUNTER++,
	DRAGON_SPEAR: COUNTER++,
	LAVA_SPEAR: COUNTER++,
	CRAB_SPEAR: COUNTER++,
	REIDITE_SWORD: COUNTER++,
	DIAMOND_PROTECTION: COUNTER++,
	AMETHYST_PROTECTION: COUNTER++,
	REIDITE_PROTECTION: COUNTER++,
	EXPLORER_HAT: COUNTER++,
	PIRATE_HAT: COUNTER++,
	STONE_HELMET: COUNTER++,
	GOLD_HELMET: COUNTER++,
	DIAMOND_HELMET: COUNTER++,
	BOOK: COUNTER++,
	BAG: COUNTER++,
	SWORD_AMETHYST: COUNTER++,
	PICK_AMETHYST: COUNTER++,
	PICK_REIDITE: COUNTER++,
	AMETHYST_SPEAR: COUNTER++,
	REIDITE_SPEAR: COUNTER++,
	HAMMER: COUNTER++,
	HAMMER_GOLD: COUNTER++,
	HAMMER_DIAMOND: COUNTER++,
	HAMMER_AMETHYST: COUNTER++,
	HAMMER_REIDITE: COUNTER++,
	CAP_SCARF: COUNTER++,

	//Christmas
	CHRISTMAS_HAT: COUNTER++,
	ELF_HAT: COUNTER++,

	AMETHYST_HELMET: COUNTER++,
	REIDITE_HELMET: COUNTER++,
	SUPER_HAMMER: COUNTER++,
	SHOVEL: COUNTER++,
	SUPER_DIVING_SUIT: COUNTER++,
	DIVING_MASK: COUNTER++,
	WATERING_CAN_FULL: COUNTER++,
	SHOVEL_GOLD: COUNTER++,
	SHOVEL_DIAMOND: COUNTER++,
	SHOVEL_AMETHYST: COUNTER++,
	PITCHFORK: COUNTER++,
	PITCHFORK2: COUNTER++,
	SPANNER: COUNTER++,
	MACHETE: COUNTER++,
	SWORD_WOOD: COUNTER++,
	WOOD_HELMET: COUNTER++,
	DRAGON_HELMET: COUNTER++,
	LAVA_HELMET: COUNTER++,
	CROWN_CRAB: COUNTER++,
	DRAGON_SWORD: COUNTER++,
	LAVA_SWORD: COUNTER++,
	WOOD_BOW: COUNTER++,
	STONE_BOW: COUNTER++,
	GOLD_BOW: COUNTER++,
	DIAMOND_BOW: COUNTER++,
	AMETHYST_BOW: COUNTER++,
	REIDITE_BOW: COUNTER++,
	DRAGON_BOW: COUNTER++,
	WOOD_SHIELD: COUNTER++,
	STONE_SHIELD: COUNTER++,
	GOLD_SHIELD: COUNTER++,
	DIAMOND_SHIELD: COUNTER++,
	AMETHYST_SHIELD: COUNTER++,
	REIDITE_SHIELD: COUNTER++,
	CROWN_GREEN: COUNTER++,
	CROWN_ORANGE: COUNTER++,
	CROWN_BLUE: COUNTER++,
	TURBAN1: COUNTER++,
	TURBAN2: COUNTER++,
	PILOT_HELMET: COUNTER++,
	HOOD: COUNTER++,
	PEASANT: COUNTER++,
	WINTER_HOOD: COUNTER++,
	WINTER_PEASANT: COUNTER++,

	FLOWER_HAT: COUNTER++,
	FUR_HAT: COUNTER++,
	SADDLE: COUNTER++,

	WITCH: COUNTER++,
	NIMBUS: COUNTER++,
	WAND1: COUNTER++,
	WAND2: COUNTER++,
	WOOD_AXE: COUNTER++,
	STONE_AXE: COUNTER++,
	GOLD_AXE: COUNTER++,
	DIAMOND_AXE: COUNTER++,
	AMETHYST_AXE: COUNTER++,
	REIDITE_AXE: COUNTER++,
	FIREFLY: COUNTER++,
	WOOD_ARROW: COUNTER++,
	STONE_ARROW: COUNTER++,
	GOLD_ARROW: COUNTER++,
	DIAMOND_ARROW: COUNTER++,
	AMETHYST_ARROW: COUNTER++,
	REIDITE_ARROW: COUNTER++,
	DRAGON_ARROW: COUNTER++,

	STONE: COUNTER++,
	WOOD: COUNTER++,
	PLANT: COUNTER++,
	GOLD: COUNTER++,
	DIAMOND: COUNTER++,
	FIRE: COUNTER++,
	WORKBENCH: COUNTER++,
	SEED: COUNTER++,
	MEAT: COUNTER++,
	COOKED_MEAT: COUNTER++,
	BIG_FIRE: COUNTER++,
	FURNACE: COUNTER++,
	PAPER: COUNTER++,
	AMETHYST: COUNTER++,
	AMETHYST_WALL: COUNTER++,
	AMETHYST_SPIKE: COUNTER++,
	AMETHYST_DOOR: COUNTER++,
	BRIDGE: COUNTER++,
	SAND: COUNTER++,
	BOTTLE_FULL: COUNTER++,
	BOTTLE_EMPTY: COUNTER++,
	KRAKEN_SKIN: COUNTER++,
	WATERING_CAN: COUNTER++,
	FLOUR: COUNTER++,
	WHEAT_SEED: COUNTER++,
	COOKIE: COUNTER++,
	WILD_WHEAT: COUNTER++,
	WINDMILL: COUNTER++,
	CAKE: COUNTER++,
	FOODFISH: COUNTER++,
	FOODFISH_COOKED: COUNTER++,
	SCALES: COUNTER++,
	GROUND: COUNTER++,
	PLOT: COUNTER++,
	ICE: COUNTER++,
	BREAD: COUNTER++,
	BREAD_OVEN: COUNTER++,
	SANDWICH: COUNTER++,

	FUR_WINTER: COUNTER++,
	BLUE_CORD: COUNTER++,
	LOCK: COUNTER++,
	DRAGON_HEART: COUNTER++,
	LAVA_HEART: COUNTER++,
	RESURRECTION: COUNTER++,
	EMERALD_MACHINE: COUNTER++,

	EXTRACTOR_MACHINE_STONE: COUNTER++,
	EXTRACTOR_MACHINE_GOLD: COUNTER++,
	EXTRACTOR_MACHINE_DIAMOND: COUNTER++,
	EXTRACTOR_MACHINE_AMETHYST: COUNTER++,
	EXTRACTOR_MACHINE_REIDITE: COUNTER++,

	LOCKPICK: COUNTER++,
	TOTEM: COUNTER++,
	SPIKE: COUNTER++,
	CORD: COUNTER++,
	WALL: COUNTER++,
	STONE_WALL: COUNTER++,
	GOLD_WALL: COUNTER++,
	DIAMOND_WALL: COUNTER++,
	WOOD_DOOR: COUNTER++,
	CHEST: COUNTER++,
	STONE_SPIKE: COUNTER++,
	GOLD_SPIKE: COUNTER++,
	DIAMOND_SPIKE: COUNTER++,
	STONE_DOOR: COUNTER++,
	GOLD_DOOR: COUNTER++,
	DIAMOND_DOOR: COUNTER++,
	FUR_WOLF: COUNTER++,
	GEMME_GREEN: COUNTER++,
	GEMME_ORANGE: COUNTER++,
	GEMME_BLUE: COUNTER++,
	SPECIAL_FUR: COUNTER++,
	SPECIAL_FUR_2: COUNTER++,
	BUCKET_FULL: COUNTER++,
	BUCKET_EMPTY: COUNTER++,
	WELL: COUNTER++,
	SIGN: COUNTER++,
	DRAGON_CUBE: COUNTER++,
	DRAGON_ORB: COUNTER++,
	LAVA_CUBE: COUNTER++,
	LAVA_ORB: COUNTER++,
	PUMPKIN_SEED: COUNTER++,
	PUMPKIN: COUNTER++,
	ROOF: COUNTER++,
	GARLIC_SEED: COUNTER++,
	GARLIC: COUNTER++,
	THORNBUSH_SEED: COUNTER++,
	THORNBUSH: COUNTER++,
	BANDAGE: COUNTER++,

	CRAB_STICK: COUNTER++,
	CRAB_LOOT: COUNTER++,
	BED: COUNTER++,

	//Christmas
	SUGAR_CAN: COUNTER++,
	CANDY: COUNTER++,
	GARLAND: COUNTER++,

	//LAVA BIOME
	REIDITE: COUNTER++,
	FLAME: COUNTER++,

	//FARMS UPDATE
	CARROT_SEED: COUNTER++,
	CARROT: COUNTER++,
	TOMATO_SEED: COUNTER++,
	TOMATO: COUNTER++,
	WATERMELON_SEED: COUNTER++,
	WATERMELON: COUNTER++,
	ALOE_VERA_SEED: COUNTER++,
	ALOE_VERA: COUNTER++,

	WOOD_DOOR_SPIKE: COUNTER++,
	STONE_DOOR_SPIKE: COUNTER++,
	GOLD_DOOR_SPIKE: COUNTER++,
	DIAMOND_DOOR_SPIKE: COUNTER++,
	AMETHYST_DOOR_SPIKE: COUNTER++,
	REIDITE_WALL: COUNTER++,
	REIDITE_DOOR: COUNTER++,
	REIDITE_SPIKE: COUNTER++,
	REIDITE_DOOR_SPIKE: COUNTER++,
	WOOD_TOWER: COUNTER++,
	PENGUIN_FEATHER: COUNTER++,
	BOAT: COUNTER++,
	SLED: COUNTER++,
	MOUNT_BOAR: COUNTER++,
	CRAB_BOSS: COUNTER++,
	BABY_DRAGON: COUNTER++,
	BABY_LAVA: COUNTER++,
	HAWK: COUNTER++,
	PLANE: COUNTER++,
	HAWK_FEATHER: COUNTER++,
	VULTURE_FEATHER: COUNTER++,
	CACTUS: COUNTER++,
	EMERALD: COUNTER++,
	PITCHFORK_PART: COUNTER++,
	PILOT_GLASSES: COUNTER++,
	FUR_BOAR: COUNTER++,
	SANDWORM_JUICE: COUNTER++,
	BABY_MAMMOTH: COUNTER++,
	FUR_MAMMOTH: COUNTER++,
};
COUNTER = 0;
const ITEMS = {
	PLAYERS: COUNTER++,
	FIRE: COUNTER++,
	WORKBENCH: COUNTER++,
	SEED: COUNTER++,
	WALL: COUNTER++,
	SPIKE: COUNTER++,
	BIG_FIRE: COUNTER++,
	STONE_WALL: COUNTER++,
	GOLD_WALL: COUNTER++,
	DIAMOND_WALL: COUNTER++,
	WOOD_DOOR: COUNTER++,
	CHEST: COUNTER++,
	STONE_SPIKE: COUNTER++,
	GOLD_SPIKE: COUNTER++,
	DIAMOND_SPIKE: COUNTER++,
	STONE_DOOR: COUNTER++,
	GOLD_DOOR: COUNTER++,
	DIAMOND_DOOR: COUNTER++,
	FURNACE: COUNTER++,
	AMETHYST_WALL: COUNTER++,
	AMETHYST_SPIKE: COUNTER++,
	AMETHYST_DOOR: COUNTER++,
	RESURRECTION: COUNTER++,
	EMERALD_MACHINE: COUNTER++,

	EXTRACTOR_MACHINE_STONE: COUNTER++,
	EXTRACTOR_MACHINE_GOLD: COUNTER++,
	EXTRACTOR_MACHINE_DIAMOND: COUNTER++,
	EXTRACTOR_MACHINE_AMETHYST: COUNTER++,
	EXTRACTOR_MACHINE_REIDITE: COUNTER++,

	EXTRACTOR_MACHINE_COPPER: COUNTER++,
	EXTRACTOR_MACHINE_IRON: COUNTER++,
	EXTRACTOR_MACHINE_TOPAZ: COUNTER++,
	EXTRACTOR_MACHINE_SAPPHIRE: COUNTER++,
	EXTRACTOR_MACHINE_JADE: COUNTER++,
	EXTRACTOR_MACHINE_RUBY: COUNTER++,
	EXTRACTOR_MACHINE_COAL: COUNTER++,
	EXTRACTOR_MACHINE_AQUAMARINE: COUNTER++,
	EXTRACTOR_MACHINE_EMERALD: COUNTER++,

	TOTEM: COUNTER++,
	BRIDGE: COUNTER++,
	WHEAT_SEED: COUNTER++,
	WINDMILL: COUNTER++,
	PLOT: COUNTER++,
	BREAD_OVEN: COUNTER++,
	WELL: COUNTER++,
	SIGN: COUNTER++,
	PUMPKIN_SEED: COUNTER++,
	ROOF: COUNTER++,
	GARLIC_SEED: COUNTER++,
	THORNBUSH_SEED: COUNTER++,
	BED: COUNTER++,
	//Christmas
	GARLAND: COUNTER++,
	TOMATO_SEED: COUNTER++,
	CARROT_SEED: COUNTER++,

	WOOD_DOOR_SPIKE: COUNTER++,
	STONE_DOOR_SPIKE: COUNTER++,
	GOLD_DOOR_SPIKE: COUNTER++,
	DIAMOND_DOOR_SPIKE: COUNTER++,
	AMETHYST_DOOR_SPIKE: COUNTER++,

	REIDITE_WALL: COUNTER++,
	REIDITE_DOOR: COUNTER++,
	REIDITE_SPIKE: COUNTER++,
	REIDITE_DOOR_SPIKE: COUNTER++,

	WATERMELON_SEED: COUNTER++,
	ALOE_VERA_SEED: COUNTER++,
	WOOD_TOWER: COUNTER++,

	LION: COUNTER++,
	WOLF: COUNTER++,
	SPIDER: COUNTER++,
	FOX: COUNTER++,
	BEAR: COUNTER++,
	DRAGON: COUNTER++,
	PIRANHA: COUNTER++,
	KRAKEN: COUNTER++,
	CRAB: COUNTER++,
	FLAME: COUNTER++,
	LAVA_DRAGON: COUNTER++,
	BOAR: COUNTER++,
	CRAB_BOSS: COUNTER++,
	BABY_DRAGON: COUNTER++,
	BABY_LAVA: COUNTER++,
	HAWK: COUNTER++,
	VULTURE: COUNTER++,
	SAND_WORM: COUNTER++,
	BABY_MAMMOTH: COUNTER++,
	MAMMOTH: COUNTER++,

	HAWK_COLORED: COUNTER++,
	CROC: COUNTER++,
	// LION: COUNTER++,
	BABY_HEN: COUNTER++,
	HEN: COUNTER++,
	BANANA: COUNTER++,

	WHEAT_MOB: COUNTER++,
	RABBIT: COUNTER++,
	TREASURE_CHEST: COUNTER++,
	DEAD_BOX: COUNTER++,
	PUMPKIN_MOB: COUNTER++,
	GARLIC_MOB: COUNTER++,
	THORNBUSH_MOB: COUNTER++,
	CRATE: COUNTER++,

	//Christmas
	GIFT: COUNTER++,

	PENGUIN: COUNTER++,
	ALOE_VERA_MOB: COUNTER++,
	FIREFLY: COUNTER++,
	SPELL: COUNTER++,

	FRUIT: COUNTER++,
};
const mobs = [
	ITEMS.RABBIT,
	ITEMS.WOLF,
	ITEMS.SPIDER,
	ITEMS.BOAR,
	ITEMS.HAWK,
	ITEMS.CRAB,
	ITEMS.CRAB_BOSS,
	ITEMS.PIRANHA,
	ITEMS.KRAKEN,
	ITEMS.DRAGON,
	ITEMS.LAVA_DRAGON,
	ITEMS.BABY_DRAGON,
	ITEMS.BABY_LAVA,
	ITEMS.FLAME,
	ITEMS.FOX,
	ITEMS.BEAR,
	ITEMS.MAMMOTH,
	ITEMS.VULTURE,
	ITEMS.SAND_WORM,
];
const STATE = {
	DELETE: 1,
	HURT: 2,
	COLD: 4,
	HUNGER: 8,
	ATTACK: 16,
	// HEAL: 32,
	HEAL: 128,
	WEB: 64,
	IDLE: 256,
	WALK: 512,
};

const healthSettings = {};
(() => {
	healthSettings[ITEMS.RABBIT] = 60;
	healthSettings[ITEMS.WOLF] = 300;
	healthSettings[ITEMS.SPIDER] = 120;
	healthSettings[ITEMS.BOAR] = 600;
	healthSettings[ITEMS.HAWK] = 300;
	healthSettings[ITEMS.CRAB] = 240;
	healthSettings[ITEMS.CRAB_BOSS] = 1500;
	healthSettings[ITEMS.PIRANHA] = 300;
	healthSettings[ITEMS.KRAKEN] = 6000;
	healthSettings[ITEMS.DRAGON] = 1500;
	healthSettings[ITEMS.LAVA_DRAGON] = 3000;
	healthSettings[ITEMS.BABY_DRAGON] = 900;
	healthSettings[ITEMS.BABY_LAVA] = 1500;
	healthSettings[ITEMS.FLAME] = 600;
	healthSettings[ITEMS.FOX] = 300;
	healthSettings[ITEMS.BEAR] = 900;
	healthSettings[ITEMS.PENGUIN] = 90;
	healthSettings[ITEMS.MAMMOTH] = 3000;
	healthSettings[ITEMS.BABY_MAMMOTH] = 1000;
	healthSettings[ITEMS.VULTURE] = 600;
	healthSettings[ITEMS.SAND_WORM] = 1500;
	healthSettings[ITEMS.PLAYERS] = 200;
	healthSettings[ITEMS.CROC] = 800;
	healthSettings[ITEMS.LION] = 350;
	healthSettings[ITEMS.HAWK_COLORED] = 400;
	healthSettings[ITEMS.HEN] = 1500;
	healthSettings[ITEMS.BABY_HEN] = 200;
})();

const damageSettings = {};
(() => {
	damageSettings[ITEMS.WOLF] = 40;
	damageSettings[ITEMS.SPIDER] = 30;
	damageSettings[ITEMS.BOAR] = 50;
	damageSettings[ITEMS.HAWK] = 40;
	damageSettings[ITEMS.CRAB] = 35;
	damageSettings[ITEMS.CRAB_BOSS] = 80;
	damageSettings[ITEMS.PIRANHA] = 40;
	damageSettings[ITEMS.KRAKEN] = 80;
	damageSettings[ITEMS.DRAGON] = 85;
	damageSettings[ITEMS.LAVA_DRAGON] = 90;
	damageSettings[ITEMS.BABY_DRAGON] = 30;
	damageSettings[ITEMS.BABY_LAVA] = 70;
	damageSettings[ITEMS.FLAME] = 50;
	damageSettings[ITEMS.FOX] = 25;
	damageSettings[ITEMS.BEAR] = 60;
	damageSettings[ITEMS.MAMMOTH] = 70;
	damageSettings[ITEMS.BABY_MAMMOTH] = 50;
	damageSettings[ITEMS.VULTURE] = 45;
	damageSettings[ITEMS.SAND_WORM] = 60;
	damageSettings[ITEMS.CROC] = 70;
	damageSettings[ITEMS.LION] = 50;
	damageSettings[ITEMS.HAWK_COLORED] = 40;
	damageSettings[ITEMS.HEN] = 50;
})();
const skins = [
	"Starver",
	"Angry",
	"Sad",
	"Happy 1",
	"What?",
	"Suspicious",
	"Scar",
	"In Trouble",
	"Cute",
	"Bored 1",
	"Happy 2",
	"Crazy",
	"Happy 3",
	"Very Cute",
	"Curious",
	"Bored 2",
	"Happy 4",
	"Scar 2",
	"Sick",
	"Somnambule",
	"Feel Bad",
	"Mmmh.",
	"Panic",
	"Hypnotic",
	"Stars in the eyes",
	"Seams",
	"Scared at night",
	"Vampire",
	"Zombie",
	"Devaster",
	"Dead Devaster",
	"Cactus",
	"Bee",
	"Camo Skin",
	"Blue Limax Skin",
	"Red Limax Skin",
	"Mr. Pumpkin",
	"Wood",
	"Zebra",
	"Tiger",
	"Day or Night",
	"Square Starver",
	"Voodoo Doll",
	"Frankenstein",
	"Old Mummy",
	"Werewolf",
	"Old Cthulhu",
	"Sea Man",
	"Old Pumpkin",
	"Old Snowman",
	"Old Christmas Tree Man",
	"Old Mrs Bell",
	"Old Elfy",
	"Old Mr Present",
	"My Dear Old Deer",
	"Mr Angel",
	"Mr Ice Cube",
	"Mr Snowman",
	"Crystal Sky Skin",
	"Radioactive Starver",
	"Eaten Cookie",
	"Blob Thing",
	"Machine Mask",
	"Mad",
	"Survivor",
	"Starverator",
	"Totem",
	"Big Pile of Sand",
	"Big Pile of Dirt",
	"Sandstone",
	"Lollipop 1",
	"Lollipop 2",
	"Lollipop 3",
	"Lollipop 4",
	"Yellow Bird",
	"Red Bird",
	"Blue Bird",
	"Owl",
	"Nemo",
	"Mr. Bread",
	"Mr. Bread 2",
	"Mr. Bread 3",
	"Red Berry",
	"Old Berry",
	"Cake",
	"Christmas Cake",
	"Mr. Pancake",
	"Mr. Taco",
	"Mr. Bottle",
	"Mr. Bottle 2",
	"Pink Rabbit",
	"Marshmallow",
	"Fox",
	"Raccoon",
	"Cloud",
	"Moon",
	"Mr. Panda",
	"Mr. Strawberry",
	"Mummy",
	"Dino",
	"Mr. Koala",
	"Bottle Protection",
	"Leaf Man",
	"Bubble",
	"Potato",
	"Axolotl",
	"Rusted Machine",
	"Starving Machine",
	"Night Stars",
	"Blue Jay",
	"Dave",
	"Smug",
	"Reclaimed",
	"Legacy Wolf",
	"Starver of the Seas",
	"Ice",
	"Sandwich Cookie",
	"Purple Geode",
	"Cyan Geode",
	"Yellow Geode",
	"Furnace Head",
	"Bag",
	"Lit Furnace Head",
	"Test Dummy",
	"Star-ver",
	"Starver Chest",
	"Starver Workbench",
	"Fish",
	"Crab",
	"Piranha",
	"Winter Fox",
	"Baby Foxy",
	"Winter Bear",
	"Hawk",
	"Nice Little Yuki",
	"Baby Yuki",
	"Mr. Carrot",
	"Bat Limax",
	"Mr. Crate",
	"Mr. Spider",
	"Mr. Spider 2",
	"Mr. Blue Starfish",
	"Mr. Orange Starfish",
	"Mr. Pink Starfish",
	"Mr. ShellMauve",
	"Mr. Shell Bead",
	"Angry Crab",
	"Penguin",
	"Mr. Boar",
	"I saw you",
	"It was funny",
	"You can scream",
	"Mr. Book",
	"Mr. Mammoth",
	"Mr. Mammoth 2",
	"Nightmare",
	"Shiny Crystal",
	"Water skin",
	"Fall Berry Bush Starver",
	"Christmas Berry Bush Starver",
	"Berry Bush Starver",
	"Tamer",
	"Tamon Wolf",
	"Tamon Snow Wolf",
	"Tamon Rabbit",
	"Tamon Snow Rabbit",
	"Tamon Bear",
	"Tamon Polar Bear",
	"Crying Angel",
	"Tamon Fennec",
	"Decay",
	"Pillow",
	"Exotic",
	"Apple",
	"Golden Apple",
	"Lava Cube",
	"Dragon Cube",
	"Will-O'-The-Wisp",
	"Flame",
	"Be a Tree",
	"Toxic Mutant",
	"Mr. Tomato",
	"Mr. Mauve, the Lapa",
	"Golden Fish",
	"LapaMauve",
	"LapaMauve ",
	"Mr. Burger",
	"Tropical Starver",
	"Mr. ShellPink",
	"Mr. OranShell",
	"Pepe",
	"Mr. Ant",
	"Mr. Watermelon",
	"Mr. Thornbush",
	"Cthulhu",
	"Mr. Cactus",
	"Momo",
	"Scream",
	"Tamon Dragon",
	"Forest Spirit",
	"Evil Goat",
	"Rotten",
	"Fossil",
	"Tamon Spectrum",
	"Black Cat",
	"Tamon Lynx",
	"Tamon Warg",
	"Tamon Menhir",
	"Mr. Garlic",
	"Robot Dragon",
	"Lava Dragon Version 1",
	"Lava Dragon Version 2",
	"Lava Dragon Version 3",
	"Ice Dragon Version 1",
	"Ice Dragon Version 2",
	"Ice Dragon Version 3",
	"Baby Dragon Version 1",
	"Baby Dragon Version 2",
	"Baby Lava",
	"Kraken",
	"Sandworm",
	"Mr. Golden Bread",
	"Starver Ores",
	"Poo",
	"Volcano Starver",
	"Lava Starver",
	"Revaster",
	"Awakened",
	"Tamon Ice Dragon",
	"Crystal Dragon",
	"Bone Dragon",
	"Tamon Warg Ghost",
	"Cursed",
	"Robot",
	"Blue Butterfly",
	"Yrifox",
	"Blob Skin",
];
const books = [
	"Book 1",
	"Book 2",
	"Book 3",
	"Book 4",
	"Damaged Book 1",
	"Damaged Book 2",
	"Scroll",
	"Clipboard",
	"Seed Book",
	"Camo Book",
	"Stone Tablet",
	"Reclaimed Book",
	"Star Book",
	"Gold Book",
	"Old Mysterious Paper",
	"Gold Engraving",
	"Ant Book",
	"Mummy Book",
	"Garlic Book",
	"Pumpkin Book",
	"Christmas Tree Book",
	"Diamond Book",
	"Obscure Book",
	"Rolled Parchment",
	"Cake Book",
	"Christmas Cake Book",
	"Fish Book",
	"Once upon a time",
	"Chrono Clock",
	"Recipe Book",
	"Amethyst Book",
	"Paint Pallet",
	"Watermelon Book",
	"Thornbush Book",
	"Menu",
	"Lover Letter",
	"Fresh-Baked Cookies",
	"Inside, there is just a book.",
	"Crafting Machine",
	"Winter Book",
	"Autumn Book",
	"Reidite Book",
	"Lava Book",
	"Lava Book 2",
	"Ocean Mystery",
	"Dragon Book",
	"Engineer Book",
	"Nightmare Book",
	"Mystery Book",
	"Cursed Book",
];
const bags = [
	"Bag 1",
	"Old Bag",
	"Bag 2",
	"Bag 3",
	"Bag 4",
	"Bag 5",
	"Wood Pickaxe Bag",
	"Wood Carrier",
	"Bag 6",
	"Bag with Wooden Swords",
	"Big Bag",
	"Bag 6",
	"Easter Bag",
	"Star Bag",
	"Winter Bag",
	"Stone Carrier",
	"Stone Pickaxe Bag",
	"Bag Camouflage",
	"Bag with Stone Swords",
	"Cow Bag",
	"Starver Bag",
	"Crystal Sky Bag",
	"Portable Furnace",
	"Crate Bag",
	"Honey Pot",
	"Gold Carrier",
	"Gold Pickaxe Bag",
	"Mr and Mrs Bakers",
	"Bag with Golden Swords",
	"Explorer Bag",
	"Bamboo Bag",
	"Mummy Bag",
	"Watermelon Bag",
	"Garlic Bag",
	"Pumpkin Bag",
	"Oil Barel bag",
	"Tree Bag",
	"Lit Portable Furnace",
	"Christmas Berry Bush Bag",
	"Berry Bush Bag",
	"Fall Berry Bush Bag",
	"Reclaimed Bag",
	"a Rabbit in my Bag",
	"Bird's nest",
	"a Fish on your Back",
	"a Squirrel in my Bag",
	"Diamond Carrier",
	"Resources Bag",
	"Diamond Pickaxe Bag",
	"Bag with Diamond Swords",
	"My Cake Bag",
	"My Christmas Cake Bag",
	"Fish Bag",
	"Cloud Bag",
	"Bee Bag",
	"Bag and Bedroll",
	"Peasant's Bag",
	"Probably Stolen Bag",
	"Natural Bag",
	"Amethyst Carrier",
	"Amethyst Pickaxe Bag",
	"Your Baby",
	"Tropical Bag",
	"Bag with Amethyst Swords",
	"Ice Bag",
	"Thornbush Bag",
	"Autumn Bag",
	"Dino Egg Bag",
	"Magic Cloud Bag",
	"Chest Bag",
	"Tamon Spectum Bag",
	"Winter Peasant's Bag",
	"Reidite Carrier",
	"Lava Bag",
	"Lava Bag 2",
	"Dragon Bag",
	"Winter Ice Bag",
	"Reidite Pickaxe Bag",
	"Octopus Bowl",
	"Cave Bag",
	"Bag with Reidite Swords",
	"Engineer Bag",
];
const accessories = [
	"Nothing",
	"Pink Cheeks",
	"Heart",
	"Bandage 1",
	"Flower 1",
	"Bow 1",
	"Bandage 2",
	"Flower 2",
	"Bandage 3",
	"Foliage",
	"Peaceful",
	"Sparkles",
	"Luxury",
	"Snow Flakes Crown",
	"Glasses 1",
	"Bow 2",
	"Little Stars",
	"Pirate Eye Patch 1",
	"Pirate Eye Patch 2",
	"Clown nose",
	"Eye Patch",
	"Flower 3",
	"False Nose",
	"Red Cloth",
	"Blue Cloth",
	"Transparent Mask",
	"Starve.io Anime",
	"Hero Mask",
	"This starver is mad",
	"Scars",
	"In Search of Intelligence",
	"Reclaimed Bandage",
	"Unwrap Starver for Gift",
	"Star Glasses",
	"Great-aunt's Glasses",
	"Little Starver",
	"Little Glasses",
	"Flower Chain",
	"Horns",
	"Golden Flower",
	"Sleeping Mask",
	"Fish on your head",
	"Rose",
	"Grey Scarf",
	"Black Scarf",
	"Skull Mask",
	"Golden Monocle",
	"A simple instruction",
	"Garland",
	"The Doormat",
	"Copium Tanks",
	"Eyelashes",
	"Helmet Prototype",
	"Fancy Glasses",
	"Medecin Mask",
	"Mr. Mayor",
	"Sunglasses 2",
	"Starfish",
	"Berry",
	"Flake",
	"Leaf ",
	"A sword in your head",
	"Winter Scarf",
	"Winter Scarf 2",
	"Winter Scarf 3",
	"Mask with animal tracks",
	"Spring Mask",
	"Pink Mask",
	"Blue Mask",
	"Military Mask",
	"Orange Mask",
	"White and Red Points Mask",
	"Stick out your tongue Mask",
	"Two Teeth Mask",
	"Make-up Mask",
	"Sad Mask",
	"Happy Mask",
	"Blood",
	"Axed Plans",
	"Saddle",
	"I see",
	"I have no body and I must dress",
	"Cursed Crown",
	"Clown Face",
	"Sunglasses 3",
	"Engineer's Glasses",
	"Engineer's Monocle",
	"Mauve's butt",
	"Lapa Head",
	"Lapa Head ",
	"Mask and Glasses",
	"Tamon Spectrum Pet",
	"Jason",
	"Devil Horns",
	"Big Boss",
	"Baby Kraken",
	"Deer Antlers",
	"Baby Dragon on your head",
	"Gaz Mask and Glasses",
	"Pink Gaz Mask and Glasses",
	"Engineer Glasses",
	"Jarred Horns",
	"Curved Horns",
	"Evil Goat Horns",
	"Decorative Earmuffs",
	"Tamon Dragon Pet",
	"Blanket",
	"More than Level 5",
	"More than Level 10",
	"More than Level 15",
	"More than Level 20",
	"More than Level 25",
	"More than Level 30",
	"More than Level 35",
	"More than Level 40",
	"More than Level 45",
	"More than Level 50",
	"More than Level 55",
	"More than Level 60",
];

function toBinary(message) {
	var packet = new Uint8Array(new ArrayBuffer(message.length));
	for (var i = 0; message.length > i; i++) packet[i] = message[i];
	return packet;
}

class Keyboard {
	constructor() {
		this.UP = 0;
		this.DOWN = 1;

		this._1 = 49;
		this._2 = 50;
		this._3 = 51;
		this._4 = 52;
		this._5 = 53;
		this.CTRL = 17;
		this.ARROW_LEFT = 37;
		this.ARROW_RIGHT = 39;
		this.ARROW_TOP = 38;
		this.ARROW_BOTTOM = 40;
		this.SPACE = 32;
		this.R = 82;
		this.G = 71;
		this.V = 86;
		this.B = 66;

		this.set_qwerty();
		document.addEventListener("keydown", this.down.bind(this));
		document.addEventListener("keyup", this.up.bind(this));
		this.keys = new Array(255);

		for (let i = 0; i < 255; i++) this.keys[i] = this.UP;
	}

	/* Change mapping of keyboard for azerty mode */
	set_azerty() {
		this.LEFT = 81;
		this.RIGHT = 68;
		this.TOP = 90;
		this.DOWN = 83;
	}

	/* Change mapping of keyboard for qwerty mode */
	set_qwerty() {
		this.LEFT = 65;
		this.RIGHT = 68;
		this.TOP = 87;
		this.BOTTOM = 83;
	}

	up(evt) {
		const k = Math.min(evt.charCode || evt.keyCode, 255);
		this.keys[k] = this.UP;
	}

	down(evt) {
		const k = Math.min(evt.charCode || evt.keyCode, 255);

		if (k === this.LEFT || k === this.ARROW_LEFT) {
			this.press_left();
		} else if (k === this.TOP || k === this.ARROW_TOP) {
			this.press_top();
		} else if (k === this.DOWN || k === this.ARROW_DOWN) {
			this.press_bottom();
		} else if (k === this.RIGHT || k === this.ARROW_RIGHT) {
			this.press_right();
		}

		this.keys[k] = this.DOWN;

		return k;
	}

	press_left() {
		this.keys[this.RIGHT] = this.UP;
		// this.keys[this.ARROW_RIGHT] = this.UP;

		this.keys[this.LEFT] = this.DOWN;
		// this.keys[this.ARROW_LEFT] = this.DOWN;
	}

	press_right() {
		this.keys[this.LEFT] = this.UP;
		// this.keys[this.ARROW_LEFT] = this.UP;

		this.keys[this.RIGHT] = this.DOWN;
		// this.keys[this.ARROW_RIGHT] = this.DOWN;
	}

	press_bottom() {
		this.keys[this.TOP] = this.UP;
		// this.keys[this.ARROW_TOP] = this.UP;

		this.keys[this.BOTTOM] = this.DOWN;
		// this.keys[this.ARROW_BOTTOM] = this.DOWN;
	}

	press_top() {
		this.keys[this.BOTTOM] = this.UP;
		// this.keys[this.ARROW_BOTTOM] = this.UP;

		this.keys[this.TOP] = this.DOWN;
		// this.keys[this.ARROW_TOP] = this.DOWN;
	}

	clear_directionnal() {
		this.keys[this.RIGHT] = this.UP;
		this.keys[this.ARROW_RIGHT] = this.UP;
		this.keys[this.LEFT] = this.UP;
		this.keys[this.ARROW_LEFT] = this.UP;
		this.keys[this.TOP] = this.UP;
		this.keys[this.ARROW_TOP] = this.UP;
		this.keys[this.BOTTOM] = this.UP;
		this.keys[this.ARROW_BOTTOM] = this.UP;
	}

	is_left() {
		return this.keys[this.LEFT] || this.keys[this.ARROW_LEFT];
	}

	is_right() {
		return this.keys[this.RIGHT] || this.keys[this.ARROW_RIGHT];
	}

	is_top() {
		return this.keys[this.TOP] || this.keys[this.ARROW_TOP];
	}

	is_bottom() {
		return this.keys[this.BOTTOM] || this.keys[this.ARROW_BOTTOM];
	}

	is_ctrl() {
		return this.keys[this.CTRL];
	}

	is_1() {
		return this.keys[this._1];
	}

	is_2() {
		return this.keys[this._2];
	}

	is_3() {
		return this.keys[this._3];
	}

	is_4() {
		return this.keys[this._4];
	}

	is_space() {
		return this.keys[this.SPACE];
	}

	is_r() {
		return this.keys[this.R];
	}

	is_g() {
		return this.keys[this.G];
	}

	is_v() {
		return this.keys[this.V];
	}

	is_b() {
		return this.keys[this.B];
	}
}

keyboard = new Keyboard();

class Mouse {
	constructor() {
		/* Define special mouse states */
		this.DOWN = 0;
		this.UP = 1;
		this.IDLE = 2; // After mouse up
		this.IN = 0;
		this.OUT = 1;

		this.pos = { x: 0, y: 0 };
		this.x_old = 0;
		this.y_old = 0;
		this.angle = 0;
		this.state = this.IDLE;
		this.dist = this.IN;
	}

	/* Change state of mouse */
	down() {
		this.state = this.DOWN;
	}

	up() {
		this.state = this.UP;
	}

	/* Update pos of mouse, useful if want to know if something changes */
	update() {
		if (this.pos.x !== this.x_old || this.pos.y !== this.y_old) {
			this.x_old = this.pos.x;
			this.y_old = this.pos.y;
			return true;
		}
		return false;
	}
}
mouse = new Mouse();

function updateInv(id, amount, oldAmount) {
	settings.nows.updateInv = Date.now();
	let min = Infinity;
	let closest = null;

	const me = world[vars.fast_units][user.id * world[vars.custormWorld]];

	for (const chest of world[vars.units][ITEMS.CHEST]) {
		let dist = getdist(me, chest);

		if (dist < min) {
			closest = chest;
			min = dist;
		}
	}

	if (closest) {
		const spaceLeft = 8000 - closest.info;

		const newAmount = spaceLeft >= amount ? oldAmount - amount : oldAmount - spaceLeft;

		if (newAmount > 0) user[vars.inv][vars.n][id] = newAmount;
		else {
			user[vars.inv][vars.n][id] = 0;
			user[vars.inv][vars.can_select] = user[vars.inv][vars.can_select].filter((e) => e.id !== id);
		}
	}
}

const drawDoor = (obj) => {
	obj.ally = isAlly(obj);
	switch (obj.type) {
		case ITEMS.REIDITE_DOOR_SPIKE:
			obj.spriteID = obj.ally ? 10022 : 10023;

			break;

		case ITEMS.AMETHYST_DOOR_SPIKE:
			obj.spriteID = obj.ally ? 10020 : 10021;

			break;

		case ITEMS.DIAMOND_DOOR_SPIKE:
			obj.spriteID = obj.ally ? 10018 : 10019;

			break;

		case ITEMS.GOLD_DOOR_SPIKE:
			obj.spriteID = obj.ally ? 10016 : 10017;

			break;

		case ITEMS.STONE_DOOR_SPIKE:
			obj.spriteID = obj.ally ? 10014 : 10015;

			break;

		case ITEMS.WOOD_DOOR_SPIKE:
			obj.spriteID = obj.ally ? 10012 : 10013;

			break;

		case ITEMS.REIDITE_DOOR:
			obj.spriteID = obj.ally ? 10034 : 10035;

			break;

		case ITEMS.AMETHYST_DOOR:
			obj.spriteID = obj.ally ? 10032 : 10033;

			break;

		case ITEMS.DIAMOND_DOOR:
			obj.spriteID = obj.ally ? 10030 : 10031;

			break;

		case ITEMS.GOLD_DOOR:
			obj.spriteID = obj.ally ? 10028 : 10029;

			break;

		case ITEMS.STONE_DOOR:
			obj.spriteID = obj.ally ? 10026 : 10027;

			break;

		case ITEMS.WOOD_DOOR:
			obj.spriteID = obj.ally ? 10024 : 10025;

			break;

		default:
			break;
	}

	ctx.save();
	ctx.translate(user[vars.cam].x + obj.x, user[vars.cam].y + obj.y);
	ctx.rotate(obj.angle);

	if (obj.info & 1) ctx.globalAlpha = 0.3;

	var img = window2.sprite[obj.spriteID][world.time];
	w = img.width;
	h = img.height;
	ctxDrawImage(ctx, img, -w / 2, -h / 2, w, h);

	ctx.globalAlpha = 1;

	ctx.restore();
};
const drawSpike = (obj) => {
	obj.ally = isAlly(obj);
	switch (obj.type) {
		case ITEMS.SPIKE:
			obj.spriteID = obj.ally ? 10010 : 10011;

			break;
		case ITEMS.STONE_SPIKE:
			obj.spriteID = obj.ally ? 10008 : 10009;

			break;

		case ITEMS.GOLD_SPIKE:
			obj.spriteID = obj.ally ? 10006 : 10007;

			break;

		case ITEMS.DIAMOND_SPIKE:
			obj.spriteID = obj.ally ? 10004 : 10005;

			break;

		case ITEMS.AMETHYST_SPIKE:
			obj.spriteID = obj.ally ? 10002 : 10003;

			break;

		case ITEMS.REIDITE_SPIKE:
			obj.spriteID = obj.ally ? 10000 : 10001;

			break;

		default:
			break;
	}

	ctx.save();
	ctx.translate(user[vars.cam].x + obj.x, user[vars.cam].y + obj.y);
	ctx.rotate(obj.angle);

	var img = window2.sprite[obj.spriteID][world.time];
	w = img.width;
	h = img.height;
	ctxDrawImage(ctx, img, -w / 2, -h / 2, w, h);

	ctx.restore();
};
let draw_player, draw_roof, draw_box;
function draw_chest() {
	ctx.save();
	ctx.translate(user[vars.cam].x + this.x, user[vars.cam].y + this.y);
	ctx.rotate(this.angle);

	var img = this.lock ? window2.sprite[10100][world.time] : window2.sprite[10101][world.time];
	w = -img.width;
	h = -img.height;
	ctxDrawImage(ctx, img, -w / 2, -h / 2, w, h);

	ctx.restore();
}
function draw_totem() {}
function draw_treasure() {}

Array.prototype.push = new Proxy(Array.prototype.push, {
	apply(target, thisArg, argumentsList) {
		if (typeof argumentsList[0] == "object" && argumentsList[0])
			if (typeof argumentsList[0].type == "number") {
				if (!vars.draw) return Reflect.apply(target, thisArg, argumentsList);
				switch (argumentsList[0].type) {
					case ITEMS.PLAYERS:
						draw_player = argumentsList[0][vars.draw];

						argumentsList[0][vars.draw] = () => !settings.PlayerOnTop.enabled && draw_player.bind(argumentsList[0])();

						break;
					case ITEMS.ROOF:
						draw_roof = argumentsList[0][vars.draw];

						argumentsList[0][vars.draw] = () => {};

						break;
					case ITEMS.DEAD_BOX:
					case ITEMS.CRATE:
						if (!vars.hit) for (const e in argumentsList[0]) typeof argumentsList[0][e] == "object" && argumentsList[0][e].max && (vars.hit = e);
						if (!vars.hitten && vars.hit) for (const e in argumentsList[0][vars.hit]) typeof argumentsList[0][vars.hit][e] == "boolean" && argumentsList[0][vars.hit][e] == false && (vars.hitten = e);

						draw_box = argumentsList[0][vars.draw];

						argumentsList[0][vars.draw] = () => !settings.BoxOnTop.enabled && draw_box.bind(argumentsList[0])(360);

						break;
					case ITEMS.CHEST:
						settings.ChestInfo.original = argumentsList[0][vars.draw];

						argumentsList[0][vars.draw] = () => !settings.ChestOnTop.enabled && draw_chest.bind(argumentsList[0])();

						break;
					case ITEMS.TOTEM:
						draw_totem = argumentsList[0][vars.draw];

						argumentsList[0][vars.draw] = () => !settings.TotemOnTop.enabled && draw_totem.bind(argumentsList[0])(261);

						break;
					// case ITEMS.TREASURE_CHEST:
					// draw_treasure = argumentsList[0][vars.draw];

					// argumentsList[0][vars.draw] = () => !settings.TreasureOnTop.enabled && draw_treasure.bind(argumentsList[0])();

					// break;
					case ITEMS.SPIKE:
						argumentsList[0][vars.draw] = drawSpike.bind(argumentsList[0], argumentsList[0]);

						break;
					case ITEMS.STONE_SPIKE:
						argumentsList[0][vars.draw] = drawSpike.bind(argumentsList[0], argumentsList[0]);

						break;

					case ITEMS.GOLD_SPIKE:
						argumentsList[0][vars.draw] = drawSpike.bind(argumentsList[0], argumentsList[0]);

						break;

					case ITEMS.DIAMOND_SPIKE:
						argumentsList[0][vars.draw] = drawSpike.bind(argumentsList[0], argumentsList[0]);

						break;

					case ITEMS.AMETHYST_SPIKE:
						argumentsList[0][vars.draw] = drawSpike.bind(argumentsList[0], argumentsList[0]);

						break;

					case ITEMS.REIDITE_SPIKE:
						argumentsList[0][vars.draw] = drawSpike.bind(argumentsList[0], argumentsList[0]);

						break;

					// SPIKE DOORS

					case ITEMS.REIDITE_DOOR_SPIKE:
						argumentsList[0][vars.draw] = drawDoor.bind(argumentsList[0], argumentsList[0]);
						break;

					case ITEMS.AMETHYST_DOOR_SPIKE:
						argumentsList[0][vars.draw] = drawDoor.bind(argumentsList[0], argumentsList[0]);
						break;

					case ITEMS.DIAMOND_DOOR_SPIKE:
						argumentsList[0][vars.draw] = drawDoor.bind(argumentsList[0], argumentsList[0]);
						break;

					case ITEMS.GOLD_DOOR_SPIKE:
						argumentsList[0][vars.draw] = drawDoor.bind(argumentsList[0], argumentsList[0]);
						break;

					case ITEMS.STONE_DOOR_SPIKE:
						argumentsList[0][vars.draw] = drawDoor.bind(argumentsList[0], argumentsList[0]);
						break;

					case ITEMS.WOOD_DOOR_SPIKE:
						argumentsList[0][vars.draw] = drawDoor.bind(argumentsList[0], argumentsList[0]);
						break;

					case ITEMS.REIDITE_DOOR:
						argumentsList[0][vars.draw] = drawDoor.bind(argumentsList[0], argumentsList[0]);
						break;

					case ITEMS.AMETHYST_DOOR:
						argumentsList[0][vars.draw] = drawDoor.bind(argumentsList[0], argumentsList[0]);
						break;

					case ITEMS.DIAMOND_DOOR:
						argumentsList[0][vars.draw] = drawDoor.bind(argumentsList[0], argumentsList[0]);
						break;

					case ITEMS.GOLD_DOOR:
						argumentsList[0][vars.draw] = drawDoor.bind(argumentsList[0], argumentsList[0]);
						break;

					case ITEMS.STONE_DOOR:
						argumentsList[0][vars.draw] = drawDoor.bind(argumentsList[0], argumentsList[0]);
						break;

					case ITEMS.WOOD_DOOR:
						argumentsList[0][vars.draw] = drawDoor.bind(argumentsList[0], argumentsList[0]);
						break;

					default:
						break;
				}
			}

		// Call the original
		return Reflect.apply(target, thisArg, argumentsList);
	},
});

const send = WebSocket.prototype.send;

WebSocket.prototype.send = new Proxy(send, {
	apply(target, thisArg, args) {
		if (typeof args[0] == "string") {
			const packet = JSON.parse(args[0]);
			const me = world[vars.fast_units][user.id * world[vars.custormWorld]];

			if (packet[2] !== "sharedUnits") {
				// const me = world[vars.units][ITEMS.PLAYERS].find((e) => e[vars.pid] == user.id);
				if (packet[0] == packets.craft) {
					if (me.right !== 46) client[vars.socket].send(JSON.stringify([packets.equip, 46]));

					settings.AutoCraft.last = packet[1];
				}
				if (packet[0] == packets.equip && settings.AutoPilot.enabled && [337, 338, 339, 340].includes(packet[1]) /* dragon */) if (me[vars.clothe] !== 155) client[vars.socket].send(JSON.stringify([packets.equip, 155]));

				if (packet[0] == packets.recycle) settings.AutoRecycle.last = packet[1];

				if (packet[0] == packets.chestPut && packet[2] == 10 && settings.PutThatMuch.enabled) {
					packet[2] = Number(settings.PutThatMuch.amount) || 10;
					updateInv(packet[1], packet[2], user[vars.inv][vars.n][packet[1]]);
					args[0] = JSON.stringify(packet);
				}
				// if (packet[0] == packets.attack) {
				// 	 me.angle = calcAngle(mouse.pos, { x: user[vars.cam].x + me.x, y: user[vars.cam].y + me.y });
				// }

				if (settings.Spectator.enabled && packet[0] == packets.recoverFocus) return;
			}
		} else if (settings.Spectator.enabled && packets.move == args[0][0]) return;

		return Reflect.apply(target, thisArg, args);
	},
});

function getCookie(name) {
	const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
	return match ? match[2] : null;
}

function setUpVars() {
	if (!user || !world || !client || !game) return setTimeout(setUpVars, 1000);

	if (!vars.inv) vars.inv = Object.keys(user).filter((e) => user[e] && user[e].max);
	if (!vars.terminal) vars.terminal = Object.keys(user).filter((e) => user[e] && user[e].input == document.querySelector("#commandInput"));
	if (!vars.chat) vars.chat = Object.keys(user).filter((e) => user[e] && user[e].input == document.querySelector("#chat_input"));
	if (!vars.team) vars.team = Object.keys(user).filter((e) => Array.isArray(user[e]) && user[e].length == 0);
	if (!vars.cam) vars.cam = Object.keys(user).filter((e) => user[e] && user[e].rx == 0);
	for (const e in user) {
		!vars.token && user[e] == getCookie("starve_token") && (vars.token = e);
		!vars.token_id && user[e] == getCookie("starve_token_id") && (vars.token_id = e);
	}
	// if (!vars.token) vars.token = Object.keys(user).filter((e) => user[e] == getCookie("starve_token"));
	// if (!vars.token_id) vars.token_id = Object.keys(user).filter((e) => user[e] == getCookie("starve_token_id"));
	if (!vars.auto_feed) for (let e in user) typeof user[e] == "object" && user[e] && typeof user[e].enabled == "boolean" && user[e].translate && Object.keys(user[e]).length > 3 && (vars.auto_feed = e);

	if (!vars.players) vars.players = Object.keys(world).find((e) => Array.isArray(world[e]) && world[e].length == 100);
	if (!vars.units) vars.units = Object.keys(world).find((e) => Array.isArray(world[e]) && world[e].length == 107);

	if (!vars.socket) {
		const part1 = client.constructor.toString().split("onmessage")[0];
		vars.socket = part1.split(";")[part1.split(";").length - 1].split(".")[1];
	}

	if ((!vars.decodePacket || !vars.decodeVar1 || !vars.decodeVar2) && client[vars.socket]) {
		const fn = client[vars.socket].onmessage.toString();
		const decodePacket = fn.split("else")[1].split(".data")[0].split("=")[1].split("(")[0].trim();

		if (!vars.decodePacket)
			window[decodePacket] = new Proxy(window[decodePacket], {
				apply(target, thisArg, args) {
					const result = Reflect.apply(target, thisArg, args);
					// if (packetHandler2(result, args[0])) return result;
					if (packetHandler2(new Uint8Array(args[0]))) return result;
					else return [];
				},
			});
		vars.decodePacket = decodePacket;

		vars.decodeVar1 = fn.split("else")[1].split(".data")[1].split(")")[0].replace(",", "").split(",")[0].split(".")[1];

		vars.decodeVar2 = fn.split("else")[1].split(".data")[1].split(")")[0].replace(",", "").split(",")[0].split(".")[1];
	}

	if (!vars.draw) {
		vars.draw = Object.keys(game).find((e) => {
			return typeof game[e] == "function" && game[e].toString().includes(".reconnect.enabled") && game[e].toString().includes("return");
		});
	}
	if (!vars.drawUI) {
		vars.drawUI = Object.keys(game).find((e) => typeof game[e] == "function" && (game[e].toString().includes(".enabled&& this.") || game[e].toString().includes(".enabled&&this.")));

		if (vars.drawUI) {
			const p1 = game[vars.drawUI].toString().replaceAll(" ", "").split(";if")[0].split(";");
			vars.AC = p1[p1.length - 1].split(".")[0];
			const fn = p1[p1.length - 1].split(".")[1].replaceAll("()", "");

			// const org = window[vars.AC][fn];
			window[vars.AC][fn] = () => {};
			const orgDraw = game[vars.drawUI];

			game[vars.drawUI] = new Proxy(orgDraw, {
				apply(target, thisArg, argumentsList) {
					if (world[vars.units]) {
						const ctx = document.querySelector("#game_canvas").getContext("2d");
						if (!draw_player) draw_player = world[vars.units][0][0][vars.draw];

						const extractorTypes = [
							ITEMS.EXTRACTOR_MACHINE_STONE,
							ITEMS.EXTRACTOR_MACHINE_GOLD,
							ITEMS.EXTRACTOR_MACHINE_DIAMOND,
							ITEMS.EXTRACTOR_MACHINE_AMETHYST,
							ITEMS.EXTRACTOR_MACHINE_REIDITE,
							ITEMS.EXTRACTOR_MACHINE_COPPER,
							ITEMS.EXTRACTOR_MACHINE_IRON,
							ITEMS.EXTRACTOR_MACHINE_JADE,
							ITEMS.EXTRACTOR_MACHINE_SAPPHIRE,
							ITEMS.EXTRACTOR_MACHINE_RUBY,
							ITEMS.EXTRACTOR_MACHINE_COAL,
							ITEMS.EXTRACTOR_MACHINE_AQUAMARINE,
							ITEMS.EXTRACTOR_MACHINE_EMERALD,
						];
						if (settings.ExtractorInfo.enabled) {
							for (const extractorType of extractorTypes) for (const extractor of world[vars.units][extractorType]) drawExtractorInfo(extractor);
							for (const windmill of world[vars.units][ITEMS.WINDMILL]) drawWindmillInfo(windmill);
							for (const breadOven of world[vars.units][ITEMS.BREAD_OVEN]) drawOvenInfo(breadOven);
						}
						if (settings.BuildsInfo.enabled) for (const furnace of world[vars.units][ITEMS.FURNACE]) drawFurnaceInfo(furnace);

						const chests = world[vars.units][ITEMS.CHEST];
						if (settings.ChestOnTop.enabled) for (const chest of chests) draw_chest.bind(chest)();
						if (settings.ChestInfo.enabled) for (const chest of chests) drawChestInfo(chest);

						const crates = [...world[vars.units][ITEMS.DEAD_BOX], ...world[vars.units][ITEMS.CRATE]];
						for (const crate of crates) {
							if (settings.BoxOnTop.enabled) draw_box.bind(crate, [360])();
							if (settings.BoxInfo.enabled) drawBoxInfo(crate);
						}

						const totems = world[vars.units][ITEMS.TOTEM];
						if (settings.TotemOnTop.enabled) for (const totem of totems) draw_totem.bind(totem)(261);
						if (settings.TotemInfo.enabled) for (const totem of totems) drawTotemInfo(totem);

						const treasures = world[vars.units][ITEMS.TOTEM];
						if (settings.TotemOnTop.enabled) for (const treasure of treasures) draw_treasure.bind(treasure);

						ctx.save();
						const players = world[vars.units][ITEMS.PLAYERS];
						if (settings.PlayerOnTop.enabled)
							for (const p of players) {
								if (p[vars.fly]) {
									p[vars.draw] = draw_player;
									continue;
									// ctx.scale(1.3, 1.3);
									// user[vars.cam].x /= 1.3;
									// user[vars.cam].y /= 1.3;
									// p.x /= 1.3;
									// p.y /= 1.3;
									// p.r.x /= 1.3;
									// p.r.y /= 1.3;

									// draw_player.bind(p)();
									// drawPull(p);
									// ghostTimers(p);

									// user[vars.cam].x *= 1.3;
									// user[vars.cam].y *= 1.3;
									// p.x *= 1.3;
									// p.y *= 1.3;
									// p.r.x *= 1.3;
									// p.r.y *= 1.3;
									// ctx.restore();
									// continue;
								}
								p[vars.draw] = () => {};
								ctx.restore();
								draw_player.bind(p)();
								drawPull(p);
								ghostTimers(p);
								ctx.restore();
							}
						ctx.restore();

						if (settings.ShowHP.enabled) drawHp();

						ctx.globalAlpha = 0.6;
						for (const roof of world[vars.units][ITEMS.ROOF]) draw_roof && draw_roof.bind(roof)();
						ctx.globalAlpha = 1;
					}
					updateFPS(performance.now());
					if (settings.Timers.enabled) drawTimers();

					const ctx = document.getElementById("game_canvas").getContext("2d");
					let y = 320;
					if (settings.ListEnabledHacks.enabled) {
						for (const property in settings) {
							if (settings[property].enabled && settings[property].draw) {
								window.ctx = ctx;
								ctx.save();
								ctx.font = "20px Baloo Paaji";
								ctx.fillStyle = "#fff";
								ctx.strokeStyle = "#000";
								ctx.lineWidth = 8;
								ctx.strokeText(property, 10, y);
								ctx.fillText(property, 10, y);
								ctx.restore();
								y += 20;
							}
						}
					}

					if (settings.JoinLeaves.enabled && Date.now() - settings.nows.joinleaves < 5000) {
						y += 100;
						for (const p of settings.JoinLeaves.join) {
							ctx.save();
							ctx.font = "25px Baloo Paaji";
							ctx.fillStyle = "green";
							ctx.strokeStyle = "#000";
							ctx.lineWidth = 8;
							ctx.strokeText(p.name + `[${p.level}]`, 10, y);
							ctx.fillText(p.name + `[${p.level}]`, 10, y);
							ctx.restore();
							y += 25;
						}
						for (const { id } of settings.JoinLeaves.leave) {
							const p = world[vars.players][id];
							ctx.save();
							ctx.font = "25px Baloo Paaji";
							ctx.fillStyle = "red";
							ctx.strokeStyle = "#000";
							ctx.lineWidth = 8;
							ctx.strokeText(p[vars.nickname] + `[${p.level}]`, 10, y);
							ctx.fillText(p[vars.nickname] + `[${p.level}]`, 10, y);
							ctx.restore();
							y += 25;
						}
					}

					return Reflect.apply(target, thisArg, argumentsList);
				},
			});
		}
	}

	if (vars.players) {
		for (const e in world[vars.players][0]) typeof world[vars.players][0][e] == "string" && (vars.nickname = e);
	}

	if (vars.inv) {
		if (!vars.n) vars.n = Object.keys(user[vars.inv]).find((e) => Array.isArray(user[vars.inv][e]) && user[vars.inv][e].length > 50);
	}
	if (vars.cam) {
		vars.change = Object.keys(user[vars.cam]).find(
			(e) =>
				typeof user[vars.cam][e] == "function" &&
				user[vars.cam][e]
					.toString()
					.slice(user[vars.cam][e].toString().indexOf("(") + 1, user[vars.cam][e].toString().indexOf(")"))
					.split(",").length == 2
		);
	}

	// if (!vars.draw && world[vars.units]) {
	// 	if (world[vars.units][0].length) {
	// 		// refreshing player's units
	// 		const me = world[vars.units][0][0];
	// 		let old = world[vars.units][0];
	// 		world[vars.units][0] = [];

	// 		old.forEach((e) => world[vars.units][0].push(e));

	// 		vars.draw = Object.keys(me).filter((e) => {
	// 			return typeof me[e] == "function" && me[e].toString().includes("switch(this.right)");
	// 		});
	// 	}

	// 	[(ITEMS.SPIKE, ITEMS.STONE_SPIKE, ITEMS.GOLD_SPIKE, ITEMS.DIAMOND_SPIKE, ITEMS.AMETHYST_SPIKE, ITEMS.REIDITE_SPIKE)].forEach((type) => {
	// 		if (world[vars.units][type].length) {
	// 			const buildObj = world[vars.units][type][0];
	// 			vars.draw = Object.keys(buildObj).filter((e) => typeof buildObj[e] == "function" && !buildObj[e].toString().includes("globalAlpha"));
	// 		}
	// 	});
	// }

	for (const e in vars) {
		if (Array.isArray(vars[e])) if (!vars[e].length) vars[e] = null;
		if (vars[e] == null) {
			setTimeout(setUpVars, 1000);
			break;
		}
	}
}
setUpVars();

// saddle 162
UtilsUI.loadScript && UtilsUI.loadScript();
// })();
// const serverUrl = "ws://localhost:8000/";

// class sharedUnitsWS {
// 	constructor(url) {
// 		this.url = "ws://localhost:8000/";
// 		this.ws = new window.ws("ws://localhost:8000/");
// 		this.ws.onmessage = this.message;
// 		this.ws.close = this.close;
// 		this.ws.onerror = this.close;
// 	}

// 	update() {
// 		this.ws.send(JSON.stringify([0, world[vars.units], "sharedUnits"]));
// 	}
// 	message(msg) {
// 		const data = JSON.parse(msg.data);
// 		for (const unit of data)
// 			for (const entity of unit) {
// 				// checks if entity exist in my local units and skip if it exist
// 				const oldEntity = world[vars.units][entity.type].find((ent) => ent.customPid === entity.customPid);

// 				if (oldEntity || !entity) continue;

// 				log("new entity: ", entity);
// 				entity[vars.draw] = draw_player;
// 				entity[vars.update] = () => {};
// 				if (entity["ⵠⵠⲆⲆⲆᐃᐃ"]) entity.ⵠⵠⲆⲆⲆᐃᐃ[vars.update] = () => {};
// 				else {
// 					entity.ⵠⵠⲆⲆⲆᐃᐃ = {};
// 					entity.ⵠⵠⲆⲆⲆᐃᐃ[vars.update] = () => {};
// 				}
// 				window.entity = entity;

// 				// add merge entity if it does not exist
// 				world[vars.units][entity.type].push(entity);
// 			}
// 		world[vars.units];
// 	}
// 	close() {
// 		log(this.url);
// 		settings.sharedUnits = new sharedUnitsWS("ws://localhost:8000/");
// 	}
// }

// settings.sharedUnits = new sharedUnitsWS("ws://localhost:8000/");
