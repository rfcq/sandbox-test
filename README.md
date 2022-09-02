# Sandbox App

Aplicação desenvolvida para fins de estudo de testes automatizados

## Requisitos
```
NodeJS LTS
NPM
Docker (para subir a aplicação via Dockerfile)
```
## Instalar dependências do projeto
```
npm install
```

### Subir aplicação
```
npm run serve
```

### Via Dockerfile
Executar os seguintes comandos:
```
docker build -t sandbox-test .
docker run -p 90:80 sandbox  
```
A aplicação poderá ser acessada em http://localhost:90
