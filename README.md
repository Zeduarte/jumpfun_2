# 🎈 JumpFun — Landing page

Landing page do **JumpFun** — parque de diversão indoor para crianças, com
trampolins, insufláveis, escorregas, piscinas de bolas, festas de aniversário
e duas unidades: **Parque de Paredes** e **Parque de Penafiel**.

> ⚠️ Projeto de demonstração. A estrutura e o estilo foram inspirados numa
> página de referência; imagens, vídeo e modelos 3D reais devem ser
> adicionados na pasta `img/` (ver abaixo).

## 🧱 Stack

Site **estático**, sem dependências nem build:

- `index.html` — estrutura e conteúdo
- `css/styles.css` — design (paleta colorida, responsivo, mobile-first)
- `js/main.js` — menu mobile, header ao fazer scroll e ano do rodapé

Fontes via Google Fonts (Cherry Bomb One + Nunito).

## 🚀 Como correr localmente

```bash
# Python 3
python3 -m http.server 8000
# depois abre http://localhost:8000
```

ou `npx serve .`

## 🌐 Publicar (GitHub Pages)

1. **Settings → Pages → Deploy from a branch**.
2. Escolhe a branch e a pasta `/ (root)` e guarda.
3. O site fica em `https://<utilizador>.github.io/<repo>/`.

## 🖼️ Imagens

Coloca os ficheiros reais em `img/` e o site passa a usá-los. Sugestão de nomes:

```
img/
├── logo.png            → logótipo JumpFun
├── paredes.jpg         → foto do Parque de Paredes (cartão de unidade)
├── penafiel.jpg        → foto do Parque de Penafiel (cartão de unidade)
├── gallery/            → fotos da galeria
└── mapa-paredes.png / mapa-penafiel.png → imagens dos mapas
```

## 🗂️ Estrutura

```
.
├── index.html
├── css/styles.css
├── js/main.js
├── .gitignore
└── README.md
```
