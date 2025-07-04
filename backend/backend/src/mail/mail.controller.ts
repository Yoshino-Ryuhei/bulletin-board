import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('registration')
  async registerUser(@Query('token') token: string, @Query('otp') otp: string) {
    return await this.mailService.registerUser(token, otp);
  }

  @Post('send/registration')
  async sendEmail(
    @Body('name') name: string,
    @Body('email') mailAdress: string,
  ) {
    return await this.mailService.sendRegisteMail(name, mailAdress);
  }

  @Post('send/update')
  async sendUpdateEmail(
    @Body('name') name: string,
    @Body('email') mailAdress: string,
  ) {
    return await this.mailService.sendUpdateMail(name, mailAdress);
  }

  @Put('send/resetpass')
  async sendResetpassEmail(
    @Body('name') name: string,
    @Body('email') mailAdress: string,
  ) {
    return await this.mailService.sendResetpassMail(name, mailAdress);
  }
}
