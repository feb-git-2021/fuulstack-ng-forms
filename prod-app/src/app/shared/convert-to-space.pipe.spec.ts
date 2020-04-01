import { ConvertToSpacePipe } from './convert-to-space.pipe';

describe('ConvertToSpacePipe', () => {
  let pipe:ConvertToSpacePipe
  beforeEach(()=>{
    pipe= new ConvertToSpacePipe() 
  })
  xit('should display space in place of -',()=>{
    expect(pipe.transform('-',' ')).toEqual(' ')
  })
});
