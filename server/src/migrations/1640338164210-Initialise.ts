import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialise1640338164210 implements MigrationInterface {
    name = 'Initialise1640338164210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "collection" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" integer NOT NULL, CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "collectionId" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" integer NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "check_out" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" integer NOT NULL, "total" numeric NOT NULL DEFAULT '0', "stateId" integer NOT NULL DEFAULT '1', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_481bc206fb41540d63866ee7dd9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "check_out_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "checkoutId" uuid NOT NULL, "productId" character varying NOT NULL, "quantity" integer NOT NULL, "size" integer NOT NULL, "color" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_16373967ea6ed51c0f4b0cb315e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "categoryId" integer NOT NULL, "name" character varying NOT NULL, "title" character varying NOT NULL, "labelSpecial" character varying, "price" numeric NOT NULL DEFAULT '0', "size" double precision array NOT NULL DEFAULT '{}', "sizeClothing" text array NOT NULL DEFAULT '{}', "numberColor" integer NOT NULL, "picture" json NOT NULL, "poster" json NOT NULL, "description" character varying NOT NULL, "percentSale" integer, "timerSale" TIMESTAMP, "numberReview" integer NOT NULL DEFAULT '0', "rating" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart_item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cartId" uuid NOT NULL, "productId" character varying NOT NULL, "size" numeric NOT NULL DEFAULT '42', "quantity" integer NOT NULL DEFAULT '0', "color" character varying NOT NULL, "discount" numeric NOT NULL DEFAULT '0', "monney" numeric NOT NULL DEFAULT '0', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_bd94725aa84f8cf37632bcde997" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" integer NOT NULL, "total" numeric NOT NULL DEFAULT '0', "quantity" integer NOT NULL DEFAULT '0', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reply_comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "commentId" uuid NOT NULL, "userId" integer NOT NULL, "name" character varying NOT NULL, "avatar" character varying NOT NULL, "content" character varying NOT NULL, "like" integer NOT NULL DEFAULT '0', "dislike" integer NOT NULL DEFAULT '0', "editComment" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_aa280a5b48fd06db0868a6fa4e1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" integer NOT NULL, "name" character varying NOT NULL, "avatar" character varying NOT NULL, "productId" character varying NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "star" integer NOT NULL DEFAULT '0', "like" integer NOT NULL DEFAULT '0', "dislike" integer NOT NULL DEFAULT '0', "editComment" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "user_role_enum" AS ENUM('User', 'Admin')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "first_name" character varying, "last_name" character varying, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "user_role_enum" NOT NULL DEFAULT 'User', "gender" character varying NOT NULL, "home_town" character varying, "about_me" character varying, "avatar" character varying NOT NULL DEFAULT 'https://drive.google.com/file/d/1AWoyHuA2aB7ayOsBy0B-gN_iotX0khuZ/view?usp=sharing', "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "province" character varying NOT NULL, "distric" character varying NOT NULL, "commune" character varying NOT NULL, "detail" character varying NOT NULL, "phoneNumber" character varying, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "react_comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" integer NOT NULL, "commentId" character varying NOT NULL, "value" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_d6a058f6a02e4c18b436fb679b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "search" ("id" SERIAL NOT NULL, "keyword" character varying NOT NULL, "number" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_0bdd0dc9f37fc71a6050de7ae7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "FK_9fcb3703e4fd614d24f0bdc4009" FOREIGN KEY ("collectionId") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "check_out_item" ADD CONSTRAINT "FK_4eb0935d769bc2f677b6e0a72b8" FOREIGN KEY ("checkoutId") REFERENCES "check_out"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_item" ADD CONSTRAINT "FK_29e590514f9941296f3a2440d39" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply_comment" ADD CONSTRAINT "FK_64d71e601bf05920cb6cd29ef40" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply_comment" ADD CONSTRAINT "FK_eb860fbc64f33446df9f92bf1e2" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "typeorm_metadata" WHERE "type" = $1 AND "schema" = $2 AND "name" = $3`, ["VIEW","public","comment_view"]);
        await queryRunner.query(`DROP VIEW "comment_view"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"`);
        await queryRunner.query(`ALTER TABLE "reply_comment" DROP CONSTRAINT "FK_eb860fbc64f33446df9f92bf1e2"`);
        await queryRunner.query(`ALTER TABLE "reply_comment" DROP CONSTRAINT "FK_64d71e601bf05920cb6cd29ef40"`);
        await queryRunner.query(`ALTER TABLE "cart_item" DROP CONSTRAINT "FK_29e590514f9941296f3a2440d39"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`);
        await queryRunner.query(`ALTER TABLE "check_out_item" DROP CONSTRAINT "FK_4eb0935d769bc2f677b6e0a72b8"`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_9fcb3703e4fd614d24f0bdc4009"`);
        await queryRunner.query(`DROP TABLE "search"`);
        await queryRunner.query(`DROP TABLE "react_comment"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "user_role_enum"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`DROP TABLE "reply_comment"`);
        await queryRunner.query(`DROP TABLE "cart"`);
        await queryRunner.query(`DROP TABLE "cart_item"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "check_out_item"`);
        await queryRunner.query(`DROP TABLE "check_out"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "collection"`);
    }

}
