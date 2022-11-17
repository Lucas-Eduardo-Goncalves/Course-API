import { hash } from "bcrypt";
import { AppError } from "../../../../shared/error/AppError";
import sgMail from "@sendgrid/mail";

import type { ICreateUserDTO, IUsersRepository } from "../../IUsersRepository";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ password, email, name }: ICreateUserDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    const sgCourseApiKey = process.env.SENDGRID_API_KEY;

    if (!sgCourseApiKey) {
      throw new AppError("Internal server error", 500);
    }

    sgMail.setApiKey(sgCourseApiKey);

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });

    const msg: sgMail.MailDataRequired = {
      to: email,
      from: "lucasgoncalvesgithub@gmail.com",
      subject: "Confirme o seu email",
      text: "Confirme o seu email para melhorar sua experiencia",
      html: "<a href='https://google.com'>Confirme aqui</a>",
    };

    sgMail.send(msg).then(
      () => {},
      (error) => {
        if (error.response) console.error(error.response.body);
        throw new AppError("User already exists");
      }
    );
  }
}

export { CreateUserUseCase };
