import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../repositories/TagsRepositories";


class CreateTagService {  

  async execute(name: string) {

    const tagsRepository = getCustomRepository(TagsRepository);

    if(!name) throw new Error("Invalid tag's name");

    const tagAlreadyExists = await tagsRepository.findOne({name});

    if (tagAlreadyExists) {
      throw new Error("Tag's name already exists");
    }

    const tag = tagsRepository.create({name});

    await tagsRepository.save(tag);

    return tag;
  }
}

export {CreateTagService};