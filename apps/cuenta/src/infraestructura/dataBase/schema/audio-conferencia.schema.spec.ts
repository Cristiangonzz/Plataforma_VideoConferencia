import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { AudioConferenciaSchema } from './audio-conferencia.schema';

describe('AudioConferenciaSchema', () => {
  let schema: AudioConferenciaSchema;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getModelToken('AudioConferencia'),
          useValue: AudioConferenciaSchema,
        },
      ],
    }).compile();

    schema = module.get<AudioConferenciaSchema>(AudioConferenciaSchema);
  });

  it('should be defined', () => {
    expect(schema).toBeDefined();
  });
});