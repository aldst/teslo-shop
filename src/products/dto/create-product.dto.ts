import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateProductDto {

    @ApiProperty({
        description: 'Product title (unique)',
        nullable: false,
        minLength: 1
    })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    @IsOptional()
    price?: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    slug?: string;

    @ApiProperty()
    @IsInt()
    @IsPositive()
    @IsOptional()
    stock: number;

    @ApiProperty()
    @IsString({ each: true })
    @IsArray()
    sizes: string[];

    @ApiProperty()
    @IsIn(['men','women','kid','unisex'])
    gender: string;

    @ApiProperty()
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    tags: string[];

    @ApiProperty()
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    images?: string[];
}
