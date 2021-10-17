export default {
    methods: {
      get_tabs(tab, id) {
      tab.map((item) => {
        if (item.category_id === id) {
          return this.new_tabs.push(item);
        }
      });
    },
    get_explanation(explanation, id) {
      explanation.map((item) => {
        if (item.category_id === id) {
          return this.new_explanation.push(item);
        }
      });
    },
     get_instructions(instructions, id) {
      instructions.map((item) => {
        if (item.category_id === id) {
          return this.new_instructions.push(item);
        }
      });
    },
    }
}