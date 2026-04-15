# 🚀 Deploy na Render — Kênia Garcia Advocacia

## Pré-requisitos

- Conta gratuita na [Render](https://render.com)
- Repositório do projeto no GitHub ou GitLab

---

## Passo a Passo

### 1. Envie o código para o GitHub

Se ainda não tem o repositório no GitHub:

1. Crie um repositório no [github.com/new](https://github.com/new)
2. No terminal, execute:
   ```bash
   git init
   git add .
   git commit -m "Primeiro deploy"
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```

### 2. Crie o serviço na Render

1. Acesse [dashboard.render.com](https://dashboard.render.com)
2. Clique em **"New +"** → **"Static Site"**
3. Conecte sua conta GitHub/GitLab
4. Selecione o repositório do projeto

### 3. Configure o deploy

Preencha os campos:

| Campo                  | Valor                          |
|------------------------|--------------------------------|
| **Name**               | `kenia-garcia-advocacia`       |
| **Branch**             | `main`                         |
| **Build Command**      | `npm install && npm run build` |
| **Publish Directory**  | `dist`                         |

> ⚠️ O arquivo `render.yaml` já contém essas configurações. A Render pode detectá-lo automaticamente.

### 4. Clique em "Create Static Site"

A Render irá:
- Instalar as dependências (`npm install`)
- Compilar o projeto (`npm run build`)
- Publicar a pasta `dist`

O deploy leva cerca de **2-3 minutos**.

### 5. Acesse seu site

Após o deploy, seu site estará disponível em:
```
https://kenia-garcia-advocacia.onrender.com
```

---

## Domínio Personalizado (Opcional)

1. Na Render, vá em **Settings** → **Custom Domains**
2. Clique em **"Add Custom Domain"**
3. Digite seu domínio (ex: `www.keniagarcia.adv.br`)
4. Configure os registros DNS no seu provedor:

   | Tipo  | Nome  | Valor                                    |
   |-------|-------|------------------------------------------|
   | CNAME | www   | `kenia-garcia-advocacia.onrender.com`    |
   | A     | @     | IP fornecido pela Render                 |

5. Aguarde a propagação do DNS (até 48h)

---

## Deploy Automático

Cada `git push` na branch `main` dispara um novo deploy automaticamente.

---

## Solução de Problemas

| Problema                  | Solução                                              |
|---------------------------|------------------------------------------------------|
| Build falhou              | Verifique os logs em **Events** no painel da Render  |
| Página em branco          | Confirme que **Publish Directory** é `dist`          |
| Rotas retornam 404        | O `render.yaml` já configura o rewrite para SPA      |
| CSS não carrega           | Limpe o cache do navegador (Ctrl+Shift+R)            |

---

## Comandos Úteis (Local)

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Gerar build de produção
npm run build

# Pré-visualizar o build
npm run preview
```

---

✅ **Pronto!** Seu site estará online na Render.
