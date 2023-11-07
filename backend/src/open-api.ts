import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const createOpenApiDocument = async (app: INestApplication) => {
  const config = new DocumentBuilder()
  .setTitle('Project Managment')
  .setDescription('Manage your projects and tasks')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);
};