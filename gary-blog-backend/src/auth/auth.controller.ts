import { Body, Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from 'src/guards/google.auth.guard';
import { KakaoAuthGuard } from 'src/guards/kakao.auth.guard';
import { NaverAuthGuard } from 'src/guards/naver.auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @HttpCode(200)
    @Post('signin')
    async localSignIn(@Req() req) {
        return '';
    }

    @HttpCode(200)
    @Post('signup')
    async localSignUp(@Req() req) {
        return '';
    }

    @HttpCode(200)
    @Post('sign/kakao')
    @UseGuards(KakaoAuthGuard)
    async kakaoSignIn(@Req() req) {
        return '';
    }

    @HttpCode(200) 
    @Post('kakao/callback')
    @UseGuards(KakaoAuthGuard)
    async kakaoSignCallback(@Req() req) {
        return '';
    }

    @HttpCode(200)
    @Post('sign/naver')
    @UseGuards(NaverAuthGuard)
    async naverSignIn(@Req() req) {
        return '';
    }

    @HttpCode(200)
    @Post('naver/callback')
    @UseGuards(NaverAuthGuard)
    async naverSignCallback(@Req() req) {
        return '';
    }

    @HttpCode(200)
    @Post('sign/google')
    @UseGuards(GoogleAuthGuard)
    async googleSignIn(@Req() req) {
        return '';
    }

    @HttpCode(200)
    @Post('google/callback')
    @UseGuards(GoogleAuthGuard)
    async googleSignCallback(@Req req) {
        return '';
    }
}
