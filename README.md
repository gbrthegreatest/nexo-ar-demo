# NEXO AR — Landing page demonstrativa

Uma nova identidade fictícia de climatização, independente de Clima Ideal e Vento Clima. Layout responsivo, HTML/CSS/JavaScript puro, sem bibliotecas de interface.

## Arquivos

- `index.html` — estrutura e conteúdo da página.
- `styles.css` — identidade visual e estilos responsivos.
- `script.js` — configuração de WhatsApp e link do Google e seleção de serviço.

## Como testar

Extraia a pasta e abra `index.html` no navegador. Os arquivos precisam ficar **na mesma pasta**.

## Como ativar WhatsApp

Abra `script.js`, no topo, e substitua o campo vazio:

```js
whatsappNumber: '5541999999999',
```

O número acima é um **exemplo fictício**, não deve ser publicado como contato verdadeiro. Use o número da empresa com **55 + DDD + número**, apenas dígitos. A página tem um seletor de serviços que acrescenta automaticamente o serviço escolhido à mensagem inicial do WhatsApp.

Para alterar o texto enviado, mude `whatsappMessage`.

## Como ativar o Perfil da Empresa no Google

No mesmo arquivo `script.js`, preencha:

```js
googleBusinessUrl: 'https://...',
```

Deixe vazio se a empresa não tiver perfil ou você não tiver a URL real.

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (por exemplo `nexo-ar-demo`).
2. Envie `index.html`, `styles.css` e `script.js` para a **raiz** do repositório.
3. Em **Settings → Pages**, escolha **Deploy from a branch**; depois `main` e `/ (root)`.
4. Aguarde a publicação. O endereço normalmente será `https://SEU-USUARIO.github.io/nexo-ar-demo/`.
5. Se atualizar `script.js` e não observar alterações, faça uma atualização forçada do navegador (Ctrl + Shift + R).

## Notas importantes

- **Projeto demonstrativo**: Nexo Ar é uma marca fictícia; não há avaliações, resultados, certificações ou depoimentos reais inventados.
- A área de atendimento, os textos, marca e canais de contato devem ser personalizados antes de apresentar o site como oficial de um cliente.
- A página não inclui checkout, backend, coleta de dados nem armazenamento de informações.
- As fontes do Google Fonts são opcionais: sem conexão, o navegador utiliza fontes locais de fallback.
- Ícones e ilustração de ar-condicionado são SVG/CSS próprios, sem imagens de terceiros.
