"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Simple Storage dApp API")
        .setDescription("Backend Web3 API\n- Nama: Prayoga Rizky Triputra\n- NIM: 231011400410")
        .setVersion("1.0")
        .addTag("simple-storage")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("docs", app, document);
    app.enableCors({
        origin: 'http://localhost:3000',
    });
    const port = process.env.PORT || 3001;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map