<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="https://grpc.io/" target="blank"><img src="https://grpc.io/img/logos/grpc-icon-color.png" width="250" alt="gRPC Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 # Nest gRPC

O projeto consiste em uma estrutura base de microsserviços utilizando grpc, conforme o vídeo [NestJS gRPC Microservices Tutorial](https://www.youtube.com/watch?v=UkWcjVWs2UQ) do canal [Michael Guay](https://www.youtube.com/@mguay).


## Clonando o projeto

Clone o projeto

```bash
  git clone https://github.com/jardelbordignon/nestjs-grpc
```

Entre no diretório do projeto

```bash
  cd nestjs-grpc
```

Instale as dependências

```bash
  pnpm install
```

## Executando o projeto

Inicie o gateway

```bash
  pnpm start:dev gateway
```

Em outro terminal inicie o microsserviço account

```bash
  pnpm start:dev account
```
## Documentação da API

Dentro do diretório apps/gateway tem um arquivo .http com as requisições mapeadas, necessário ter instalado a extensão `rest client` no vscode.


## Aprendizados

Este projeto tem como objetivo principal esclarecer os fundamentos dos microsserviços, destacando a importância do gateway na gestão da comunicação entre o cliente e os microsserviços. A utilização do gRPC não apenas facilita a comunicação entre os serviços, mas também contribui para a consistência na troca de informações.

A definição de protocolos (protos) e a geração de tipos através do gRPC são essenciais para garantir que a comunicação entre os microsserviços seja eficiente, segura e consistente. Essas práticas asseguram que os dados trocados entre os serviços estejam corretamente formatados e validados, reduzindo a probabilidade de erros e melhorando a qualidade geral do sistema.
