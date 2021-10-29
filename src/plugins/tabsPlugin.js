import Vue from "vue"

export default{
    install(vue){
        Vue.prototype.$get_tabs = function(tab, id){
            tab.map((item) => {
                if (item.category_id === id) {
                  return this.new_tabs.push(item);
                }
              })
        },
        Vue.prototype.$get_explanation = function(explanation, id){
            explanation.map((item) => {
                if (item.category_id === id) {
                  return this.new_explanation.push(item);
                }
              })
        },
        Vue.prototype.$get_instructions = function(instructions, id){
            instructions.map((item) => {
                if (item.category_id === id) {
                  return this.new_instructions.push(item);
                }
              });
        }

    },

    
}
