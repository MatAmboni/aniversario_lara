# Homenagem para Lara

Landing page de aniversário feita para Lara Paulino.

## O que este projeto faz

Este repositório contém uma página estática de homenagem de aniversário.  
Ela apresenta:

- seção inicial (hero)
- contagem regressiva para a data do aniversário
- carta aberta
- seção com player de áudio (play/pause)
- mensagem final

## Como o projeto está organizado

A estrutura é simples e plana, sem backend, sem framework e sem etapa de build.

- `index.html`: estrutura e conteúdo da página.
- `styles.css`: layout, cores, responsividade e animações.
- `script.js`: lógica da contagem regressiva e do player de áudio.
- `foto_lara.png`: imagem principal da seção hero.
- `musica.mp3`: faixa de áudio da homenagem.
- `README.md`: instruções de uso e personalização.

## Pontos de entrada principais

1. Abra `index.html` no navegador.
2. O `index.html` carrega `styles.css` e `script.js`.
3. O `script.js` usa os IDs da página (`#days`, `#hours`, `#playButton`, `#birthdayAudio`, etc.) para controlar a parte dinâmica.

## Leitura rápida recomendada

1. `README.md` (visão geral e como publicar/personalizar).
2. `index.html` (estrutura das seções e conteúdo).
3. `script.js` (contagem regressiva e player de áudio).
4. `styles.css` (visual e comportamento responsivo).

## Ver localmente

Abra `index.html` no navegador. A página é estática e não precisa instalar nada.

## Publicar em poucos minutos

1. Acesse [Netlify Drop](https://app.netlify.com/drop).
2. Arraste a pasta deste projeto para a área indicada.
3. Copie o link gerado e envie para a Lara.

Para trocar o endereço por um nome mais bonito, crie uma conta gratuita no Netlify e altere o nome do site em **Site settings > Change site name**.

## Personalizar

- A carta está em `index.html`.
- As cores e o layout estão em `styles.css`.
- A data do contador está no início de `script.js`.