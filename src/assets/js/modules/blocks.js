import TeamMembers from "../components/team-members";

const BLOCKS = {
  "team-members": TeamMembers,
};

class Blocks {
  constructor() {
    Object.keys(BLOCKS).forEach((className) => this._initBlock(className));
  }

  _initBlock(className) {
    document
      .querySelectorAll(`.${className}`)
      .forEach((element) => new BLOCKS[className](element));
  }
}

export default Blocks;
