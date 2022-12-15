export class NoPunctuation {

  private readonly ptBR: { [ key: string ]: string[] } = {
    a: ['à', 'á', 'â', 'ã', 'ä', 'å'],
    A: ['À', 'Á', 'Â', 'Ã', 'Ä', 'Å'],
    c: ['ç'],
    C: ['Ç'],
    e: ['è', 'é', 'ê', 'ë'],
    E: ['È', 'É', 'Ê', 'Ë'],
    i: ['ì', 'í', 'î', 'ï'],
    I: ['Ì', 'Í', 'Î', 'Ï'],
    n: ['ñ'],
    N: ['Ñ'],
    o: ['ò', 'ó', 'ô', 'õ', 'ö', 'ø'],
    O: ['Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø'],
    s: ['š'],
    S: ['Š'],
    t: ['þ'],
    u: ['ù', 'ú', 'û', 'ü'],
    U: ['Ù', 'Ú', 'Û', 'Ü'],
    y: ['ý', 'ÿ'],
    Y: ['Ý', 'Ÿ'],
    z: ['ž'],
    Z: ['Ž']
  };

  private string = '';
  
  constructor(string: string) {
    this.string = string;
  }

  build(): string {
    return this.string;
  }

  replaceCommonAccentedCharacters(): NoPunctuation {
    for (const key in this.ptBR) {
      const source: string[] = this.ptBR[key];

      for (let i = 0; i < source.length; i++) {
        this.string = this.string.replaceAll(source[i], key);
      }
    }
    return this;
  }

  replaceManyWhiteSpacesTogetherForOnlyOne(): NoPunctuation {
    this.string = this.string.replace(/\s{2,}/g, ' ');
    return this;
  }
}
