import Component from "hd-components/component";
import Popup from "hd-components/popup";

class TeamMembers extends Component {
  setup() {
    this.$item = this.$find("list-item");
    this.popup = null;
  }

  listen() {
    this.$item.on("click", (event) => {
      this.$popup = $(event.currentTarget).find(".popup");
      if (this.$popup.length > 0) {
        this.popup = new Popup(this.$popup);
        this.popup.open();
      }
    });
  }
}

TeamMembers.slug = "team-members";

export default TeamMembers;
