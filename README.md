# 🎈 BalizasLândia — Landing page

Réplica de demonstração da página do **BalizasLândia** — parque infantil indoor
para crianças dos 3 aos 11 anos, com trampolins, insufláveis, escorregas,
piscinas de bolas, festas de aniversário e duas unidades (Santa Maria da Feira
e Oliveira de Azeméis).

> ⚠️ Projeto criado do zero, apenas para fins educativos/demonstração.
> Não tem afiliação oficial com o BalizasLândia. As imagens, logótipos e textos
> exatos do site original **não** foram copiados — o conteúdo é uma recriação
> baseada em informação pública.

## 🧱 Stack

Site **estático**, sem dependências nem build:

- `index.html` — estrutura e conteúdo
- `css/styles.css` — design (paleta colorida, responsivo, mobile-first)
- `js/main.js` — menu mobile, formulário demo e ano do rodapé

Fontes via Google Fonts (Fredoka + Nunito). Ícones em emoji, por isso não há
imagens externas a carregar.

## 🚀 Como correr localmente

Basta abrir o `index.html` no browser. Para servir com um servidor local
(recomendado, evita restrições de alguns browsers):

```bash
# Python 3
python3 -m http.server 8000
# depois abre http://localhost:8000
```

ou

```bash
npx serve .
```

## 🌐 Publicar (GitHub Pages)

1. Faz push deste repositório para o GitHub.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Escolhe a branch e a pasta `/ (root)` e guarda.
4. Em segundos o site fica disponível em `https://<utilizador>.github.io/<repo>/`.

## 🗂️ Estrutura

```
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── .gitignore
└── README.md
```

## ✏️ Personalizar

- **Cores:** variáveis `:root` no topo de `css/styles.css`.
- **Textos/secções:** diretamente no `index.html`.
- **Preços e horários:** secções `#precos` e `#parques` no `index.html`.
- **Imagens reais:** cria uma pasta `img/` e substitui os emoji/blocos por
  `<img>` quando tiveres as fotos e logótipo oficiais.
