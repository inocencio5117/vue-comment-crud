import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(App);
  });

  it("renders App component", () => {
    console.log(wrapper.classes());

    expect(wrapper.find(".form-container"));
    expect(wrapper.find("p").text("Sem comentários..."));
  });

  it("Should render fill the form fields and create a comment", () => {
    const authorInput = wrapper.find("input");
    const messageTextarea = wrapper.find("textarea");
    const sendButton = wrapper.find("button");

    const author = "Vinicius";
    const message = "A beautiful message";

    authorInput.setValue(author);
    messageTextarea.setValue(message);
    sendButton.trigger("click");

    expect(wrapper.vm.comments).toEqual([{ author: author, message: message }]);
  });
});
