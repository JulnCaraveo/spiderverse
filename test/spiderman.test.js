const spiderman=require("./../app/spiderman");
describe("Spiderman test", () => {
    test('Case 1: Revisar si es el actor deseado', () => {
      const andrewGarfield=new spiderman("spiderman sony",31,"andrew",31,"sony")

      expect(andrewGarfield.name).toBe("spiderman sony");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("andrew");
      expect(andrewGarfield.movies).toBe(31);
      expect(andrewGarfield.studio).toBe("sony");
    });
    test('Case 2: revisar si es Tom Holland', ()=>{
        const tomholland=new spiderman("spiderman sony",31,"tom",31,"universal");

        expect(tomholland.getinfo()).toBe("Hey I'm tom from universal");
    });
  })