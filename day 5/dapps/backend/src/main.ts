import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Simple Storage dApp API")
    .setDescription(
      "Backend Web3 API\n- Nama: Prayoga Rizky Triputra\n- NIM: 231011400410"
    )
    .setVersion("1.0")
    .addTag("simple-storage")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  app.enableCors({
    origin: 'http://localhost:3000',
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
}
bootstrap();
