# findurService

### Esse é um projeto acadêmico apenas de estudo

## 🛠️ Plataforma para:

* **profissionais autônomos divulgarem seu serviço**
* **buscar serviços de profissionais autônomos**

<img width="640" height="480" alt="findur_gif" src="https://github.com/user-attachments/assets/9d592e73-7d6c-4201-9ae5-9bb3713ba1a6" />

# Plataforma para Profissionais Autônomos

## 1. Contexto do projeto

O projeto consiste no desenvolvimento de uma plataforma web voltada à divulgação e localização de profissionais autônomos.

A proposta é facilitar o contato entre pessoas que precisam contratar um serviço e profissionais que desejam divulgar seu trabalho e encontrar novos clientes.

Atualmente, muitos profissionais autônomos dependem principalmente de indicações, redes sociais ou aplicativos de mensagens para divulgar seus serviços. Para os clientes, isso pode dificultar a procura por profissionais disponíveis, principalmente quando não possuem referências.

A plataforma pretende centralizar essas informações em um único ambiente.

### Usuários da solução

**Clientes:** pessoas que procuram profissionais para realizar determinado serviço.

**Profissionais autônomos:** pessoas que desejam divulgar seus serviços e disponibilizar uma forma de contato.

### Necessidades dos clientes

* encontrar profissionais de maneira simples;
* identificar a área de atuação;
* consultar informações sobre os serviços oferecidos;
* entrar em contato com facilidade pelo WhatsApp.

### Necessidades dos profissionais autônomos

* possuir um espaço para divulgar seus serviços;
* apresentar informações sobre sua atuação profissional;
* aumentar sua visibilidade;
* disponibilizar uma forma direta de contato.

---

## 2. Persona

### Lucas Almeida

* **Idade:** 29 anos
* **Profissão:** Assistente administrativo
* **Localização:** Brasília - DF
* **Perfil:** Cliente em busca de serviços

### Características

Lucas utiliza principalmente o celular para acessar serviços online e prefere interfaces simples, diretas e com poucas etapas.

Quando precisa contratar algum profissional, normalmente procura indicações de conhecidos ou realiza buscas em redes sociais.

### Objetivo

Encontrar um profissional para realizar um serviço específico em sua região.

### Necessidades

* pesquisar pelo tipo de serviço desejado;
* visualizar profissionais relacionados à busca;
* acessar informações sobre cada profissional;
* encontrar uma forma de contato facilmente.

### Dificuldades

* encontrar profissionais sem depender de indicações;
* localizar informações organizadas sobre os serviços;
* navegar em páginas com excesso de informações;
* encontrar rapidamente uma forma de contato.

---

## 3. Organização da interface e da interação

A interface será organizada para permitir que o cliente encontre um profissional e acesse seu contato com poucas etapas.

A interação principal ocorre por meio da busca e seleção de profissionais. O usuário informa o serviço desejado, visualiza os resultados disponíveis, seleciona um profissional para consultar seu perfil e, caso tenha interesse, utiliza o botão de contato pelo WhatsApp.

A plataforma será dividida nas seguintes páginas:

### Página inicial

Será o principal ponto de entrada da plataforma e contará com:

* campo de busca por serviço;
* categorias de serviços;
* acesso aos profissionais;
* acesso ao cadastro de profissionais.

### Página de profissionais

Apresentará os profissionais encontrados de acordo com a busca realizada.

Cada profissional será apresentado em um card contendo:

* foto;
* nome;
* profissão;
* localização;
* botão para acessar o perfil.

### Perfil do profissional

Apresentará informações mais detalhadas sobre o profissional:

* nome;
* profissão;
* localização;
* descrição;
* serviços oferecidos;
* contato pelo WhatsApp.

### Cadastro do profissional

Permitirá que o profissional informe os dados necessários para divulgar seu serviço:

* nome;
* profissão;
* categoria;
* localização;
* descrição dos serviços;
* telefone ou WhatsApp.

---

## 4. Fluxo de navegação

### Cenário de utilização

Lucas precisa encontrar um eletricista para realizar um serviço em sua residência.

Para realizar essa tarefa, ele seguirá o seguinte fluxo:

```text
Página inicial
      ↓
Pesquisar "Eletricista"
      ↓
Visualizar profissionais encontrados
      ↓
Selecionar um profissional
      ↓
Visualizar perfil
      ↓
Entrar em contato pelo WhatsApp
```

### Etapa 1 — Buscar o serviço

Lucas acessa a página inicial e utiliza o campo de busca para procurar pelo serviço desejado.

```text
┌─────────────────────────────────────┐
│       Encontre um profissional      │
│                                     │
│ [ Eletricista              ] Buscar │
│                                     │
│ Categorias                          │
│                                     │
│ Eletricista | Encanador | Designer  │
└─────────────────────────────────────┘
```

### Etapa 2 — Visualizar os resultados

Após realizar a busca, a plataforma apresenta profissionais relacionados ao serviço pesquisado.

```text
Eletricistas

┌──────────────────────────┐
│ João Silva               │
│ Eletricista              │
│ Brasília - DF            │
│                          │
│ [ Ver perfil ]           │
└──────────────────────────┘

┌──────────────────────────┐
│ Carlos Souza             │
│ Eletricista              │
│ Brasília - DF            │
│                          │
│ [ Ver perfil ]           │
└──────────────────────────┘
```

Lucas analisa os resultados e escolhe um profissional.

### Etapa 3 — Visualizar o perfil

Ao selecionar um profissional, Lucas acessa seu perfil para consultar mais informações.

```text
┌─────────────────────────────────────┐
│ João Silva                          │
│ Eletricista                         │
│ Brasília - DF                       │
│                                     │
│ Sobre                               │
│ Serviços elétricos residenciais.    │
│                                     │
│ Serviços                            │
│ • Instalação elétrica               │
│ • Troca de tomadas                  │
│ • Manutenção                        │
│                                     │
│ [ Entrar em contato pelo WhatsApp ] │
└─────────────────────────────────────┘
```

### Etapa 4 — Entrar em contato

Caso tenha interesse no serviço, Lucas seleciona o botão de contato e é direcionado para o WhatsApp do profissional.

O fluxo principal da plataforma pode ser resumido como:

```text
Buscar
   ↓
Encontrar
   ↓
Visualizar perfil
   ↓
Entrar em contato
```

Esse fluxo representa uma das tarefas mais importantes do sistema: permitir que uma pessoa encontre um profissional autônomo e tenha acesso direto a uma forma de contato.
