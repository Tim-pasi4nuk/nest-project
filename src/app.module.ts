import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';

@Module({
    controllers:[],
    providers:[],
    imports: [
        ConfigModule.forRoot({
            envFilePath:`.${process.env.NODE_ENV}.env`
        }),
        MongooseModule.forRoot(`${process.env.MONGODB_URL}`),
        UsersModule
    ],

})
export class AppModule{}
