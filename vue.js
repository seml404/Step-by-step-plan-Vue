// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало
let app = Vue.createApp({
  data() {
    return {
      stepsContent: [{
          title: 'Step 1',
          text: 'Description of step 1'
        },
        {
          title: 'Step 2',
          text: 'Description of step 2'
        },
        {
          title: 'Step 3',
          text: 'Description of step 3'
        },
        {
          title: 'Step 4',
          text: 'Description of step 4'
        },
        {
          title: 'Step 5',
          text: 'Description of step 5'
        },
      ],
      status: {
        active: 1,
        passed: 0,
        finish: 0,
      },
      content: ``,
    };
  },
  methods: {
    render() {
      this.content = this.stepsContent[this.status.active - 1].text;
    },
    moveForward() {
      if (this.status.active < this.stepsContent.length) {
        this.status.active++;
        this.status.passed++;
        this.content = this.stepsContent[this.status.active - 1].text;
      }
    },
    moveBackwards() {
      if (this.status.active > 1) {
        this.status.active--;
        this.status.passed--;
        this.content = this.stepsContent[this.status.active - 1].text;
      }
    },
    navigate(index) {
      this.status.active = index + 1;
      this.status.passed = index;
      this.content = this.stepsContent[this.status.active - 1].text;
    },
    finish() {
      this.status.finish = 1;
    },
    begin() {
      this.status.active = 1;
      this.status.passed = 0;
      this.status.finish = 0;
      this.content = this.stepsContent[this.status.active - 1].text;
    }
  },
  mounted() {
    this.render();
  }


});


app.mount('#app');