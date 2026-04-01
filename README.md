# Atividade-CRUD-PAM
# 📱 MeuCrud

## 📖 Descrição do projeto

Este projeto foi desenvolvido em **React Native com Expo** e tem como objetivo implementar um **CRUD de pessoas**.

O aplicativo permite:

* 📋 listar pessoas cadastradas
* ➕ adicionar novas pessoas
* ✏️ editar pessoas existentes
* 🗑️ deletar registros

Além disso, foi implementado o campo **phone**, solicitado no desafio, aparecendo no formulário, no card de exibição e no envio para a API.

Também foi adicionada a **navegação entre telas com React Navigation**, permitindo alternar entre:

* `HomeScreen`
* `AddEditScreen`

---

## 🛠️ Tecnologias utilizadas

* React Native
* Expo
* React Navigation
* JSON Server
* JavaScript

---

## ⚙️ Instalação

Clone o projeto e instale as dependências:

```bash
npm install
```

Instale também as dependências da navegação:

```bash
npx expo install @react-navigation/native
npx expo install @react-navigation/native-stack
npx expo install react-native-gesture-handler
npx expo install react-native-screens
npx expo install react-native-safe-area-context
npx expo install react-native-reanimated
```

---

## ▶️ Execução

### 1) Iniciar o JSON Server

```bash
npx json-server --watch db.json --port 3000
```

### 2) Configurar a API

No arquivo `configApi.js`, coloque o IP local da máquina:

```javascript
export const API_URL = "http://SEU_IP:3000"
```

Exemplo:

```javascript
export const API_URL = "http://192.168.0.128:3000"
```

### 3) Rodar o aplicativo

```bash
npx expo start
```

Depois basta escanear o QR Code no **Expo Go**.

---

## 💡 Explicação da solução

O problema foi resolvido criando uma estrutura de CRUD conectada ao **JSON Server**.

### ✅ Desafio 1 — Novo campo no CRUD

Foi adicionado o campo **phone** em:

* estrutura do `db.json`
* formulário de cadastro
* card de exibição na Home
* envio de dados para API

### ✅ Desafio 2 — Navegação entre telas

Foi utilizada a biblioteca **React Navigation** para alternar entre as telas:

* HomeScreen → lista as pessoas
* AddEditScreen → adiciona e edita pessoas

### 🎨 Melhorias extras

Além do solicitado, foram feitas melhorias visuais:

* inputs estilizados
* cards com bordas arredondadas
* melhor espaçamento
* validação dos campos antes de salvar
* mensagens de sucesso e erro

Essas melhorias deixam a aplicação mais organizada, intuitiva e agradável de usar.
