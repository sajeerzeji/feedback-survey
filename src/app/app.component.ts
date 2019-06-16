import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // title = "Feedback";
  customerName = "Jane";
  feedBack = 5;
  // feedBackImage = '';
  // feedBackCaption = '';

  feedBackImageHappy = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAqHSURBVHhe7Z1lrDVFEoYvLLK7+AKLuy0aCO4S3CGwOMGdAMEhQHAPgeBuCQRZ9CP4IsEJLsEtuOsuzvv8mFCp9NwzM6fHzpk3eX7cm0zPmZ6Z7uqq6pqRTp06derUaYA1uVhW7CROEbeKx8TL4n3xrfhd/E98LF4TT4rbxTliT7GymEF0KiBuwEbibPGKoLNj8YG4QmwrZhSdUjSJ4A14SPwqQp1ZBi+IA8W0opO0vLhS/CBCHZaVL8Qv7n954Ng7xaZiHDF0WkPwNoQ6x/O1uEucJZgPVhVzin+KCYTVXwVD3qxiBWHnnY9EqH3P64IhbVwx8OJGMOGGOiLhJ8HTepBYXMR8YucRe4jrRWIMpPGW2FGMLQZOWDj/EaELT3hC0FlTiir0d7GFwBobbbh7XCwsBkI83fuJtKeRt+ESwZNbp5jUTxAMj6HfyQ07Q2B8tFbTiQdE6AJZM5wpZhZN0mTicPGZCP3uN8UionVi4v1EhC7qZjGLaLImFayDQib4/wVDays0luAJC13I22Jd0SbxNjCH+GuBqwVWXWP1F3GhCP34y8SEoo3CyjpMhCb++wRvU+PEkxKyor4X24hB0IoC35m/xmfE1KIxwny8V/gfygQ4rxgkYZI/KPy1viGmF7WLYeom4X/gs2IaMYj6mwhd83Oi1uGLCfx84X9YY8fViEqbLx8VjBi16Fjhf9B/RW0/qGLxQGIa+z7g7eGGVaq1xW/C/hBe2VavZAuIjg8ZM4eKyoRfyq9kidKxMh9GjSfuEbY/MJGXE6WLJ8JbGZi2dfui6hZzJlal7RdM5ClEqTpE2JMCsYNOIyOLih+F7ZtrRWnCEcjbYE94uej0p/YWtn9gdVGKvO1NAMdH7IZdWF7EV2w/vSrGF1GFVWVPAm1zFFalOQThBdtX+MKiibv+vLAnuEV0SteRwvYXATpi/VG0gbCNc/ebHs+oWzhbGdJtv3GTosjHA8j+6NRb2wvbb1+KiUVfWkXYRn8WM4lOvcWC8V1h+49Mmr50g7ANkpDQKbvII7P9R9SUObmQmIT8QmfQ4htlC1c9WZW2D8nWLKTdhG2IuaRTfp0rbD/iti+kR4RtiNevDM0mCI8uJqpOGsA3t4BguwJvfxlZiksJ24/kfvHm5BKeW9sICW2xMwrXEWSf2/N8J6pISONGHCDYT2LPj0OQBy/mjWHOIF/Ynodrz6UthW2AXNuYIl5g2/ewGaeslFKsn9tE6LwJ14iYQSayIm37p4pc8uHJvs01I5xtPrgV4m5Rhk4UofN5YgaZVhO2bTJVcsmvMpcQscR2NNv2aBS2SFL0D0HmYehcnm9ErHA07ViLlUTCzK4U0lnsD2MSivX6TiVs2704ScQUG3JC50mD7ROx5POc1xOZRF6uPZDNMrFEWr9tuxdXiZjaV4TOkwYbfmLJD5UHi0wikdgeGNN3NbuwbfcCGz6mvH+pF5uIWNpO2LYvFZnEDbAHxlx/YE6G0jHTwNqLqblF6DwhMDxiZiMuLWz7D4tMwsS1B2IhxBSvqm0/jfdE7gVUBvnrS+M6EVNM4rZ9XCqZRH6VPZCVdEyxDkjbyJOARbKSKEPkBqTtXUngYSgjgdrvJMsU2n1H2IOwjGKLWDxbFELrERKXY5u7XjxkDBn+3ED2ZVmJ094dnylN6HNhDyozkYExHRcG8xZWCNFJ3qAqhEuDrdNE8jAejhCM82XqRWH7NlPk1S5geII7xRPJ2PaGzC9GFVaQPeAr0Sme7he2f5cRPWW3bhGy7RRPvnrFQqKneCvsQY3e2NgyeQuWhXJPeSur9IThIVIhC7aQJdApk3x8PZM32W83qGSfwxCIbeG2X0lczyQfnIrp8RxmeU/30yKT9hf2wNzhxk5BbS5sv2YOLZDVbg+k+FcRYQxQb6q0/REVizIbu4iitRp9AnbmXF+qtdkDPxR5RYSRfYdJG8eINguXTrI+w7VUpEbjGJH0B2wmMgkfz6fCHpw3YxGPqj0ethJtFPlifucYoeA8om4YMXrbRq7SVKTB2IN3F3nETSWVx7ZRpku9LFG7EVe8vQ5uTt43xCfL4dHOpV2FbYC92HmF48z7/7mYtpjRPMEkR9vfj7P13yKv/GbZC0QuzSVsA0VTYsis8DEPbhJu7yYLl4ZPhYKjRBFRT9K2k3n+sLKTMlAwsoiwTPxNYfhqatkmPLB+DgWe6iJbCXwcn2sv5I5io6JtiN2lRbWXsG0lHCeKXGRZYq0QSqRjX0zRfF+u0bZ1oygkfFj2ycbs66d8BtkroapslKWoe1cWW83SquHx/6KJgtxE71DcUBSWD6gcL/rR+oIMd9smkB1Z1xDGfOYnb+BhzJzMlqKNhW2TNUxfIeqthW2Qjuu3FhYlKFhs2nYT2G5dVd0USpWnVR5lp3HetYYXQzFJ1bbd00VfYkHjrQ2qjvYrhj4Kndl2E4hSnidipx8lYkLFbZFW3JnKCzFq8/piC0zmUb5h4tcklGaKUTGOcRn7PC0bnfmGZLU1RYxk7yUF2S1+1Z3AEIUlNZHoV8wdfjt57rVHmgjh8iEU2ziveixhFoYKS1rY6XSxwPTOagCQKYijlB1ZfgeTBxM/phdhB2Hb562P+sb7DaA8vbFLbuPA82ufNFio8gSybZuEO4Y4bhhvFFmRvTITE1hvkFweMxeMB8EXeLtIRBVDxlPCnoQOiTGUWDFnMZkSvLHnig1WFaWUYgxPXr4wKJZVKdvz+JaHt0iiVrlxwiHHmJ9WGD8vfMWHoBCTbVkfa2Ezp/dK4KkoTQwN9mQMXWX7pXhrSPHEumPfYdbhiHQmMgVPFgTJyq7tReDKp+EyihRd4WcS1pU3g5nwsemrFOM0bxAdzeKLuD9D3VoCb3LVBTl543wSHNbcfKJ0EbCx+b/ARDos9XpDCtXvxdKqTPsI/wNqKSDcAIUKSvOtxEqFWyBUQJg5pkne27LlF81Aumgtn+ZgiPLp9cDrOwxvCmsz770m3FvrVxKoSeITiIF6tdErcTZIPqUHqBjXc79HFeKJ8Fu1gG+KDNpXErCmvOkPWFSs0xoj/Es+ywRa+1WzgFhn+JJVwNoDx2XjxNogNKdgImOVtXmyZ3Uf8hgwMjS67j2r4bTSR3eITBtUGiRiJ7jNvTsEqPXVim+0Y2GlfdWMSBwTYhkFAWIKdwd5yaHsE+AL16376hxl+9JCtbhfqDtS1RborGJYZXhKKyHF5E3NktaKagijfZSYMZhslLrfGN4IfGI+Bm7BUViJb6oKEYYdLWqHpYI5icOwysn/X4K8KZ+qY2Eb2s6iVK9tHeItGC25IIEbR41C6nbFdljiyuemU77Pp3d6CLsS6Rv4Ta+Yx0cLv/06BCYz8XZuEGM3cRGOzyKigWwjI4+WnNwxotfDAJyT5Liysl4aK7IFSUQbbbhIg5g6889LgrGdqncs2visBgaD3+2aBYbN00StvqgmiLGZ6j/kz6Z9YL4sqEdMri3pnYPseyss5hni0jypWDyhBVm/sFmGxR5DGVVKO+UQEyrpQQxt1CjENZN1OGLNQKYM3z1nDuEG5NpG1im7GF6Y3NlytqAgrMwEzt/E94c5nNypU6dOnYZSIyN/AM9cD10YgPBeAAAAAElFTkSuQmCC';
  feedBackCaptionHappy = 'Thank you for that smile';
  
  feedBackImageSad = 'data:image/png;base64,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';
  feedBackCaptionSad = 'We are sorry to see that you are not happy';

  feedBackImageNormal = 'data:image/png;base64,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';
  feedBackCaptionNormal = 'Looks like something bothers you';

  feedBackImage = this.feedBack == 5 ? this.feedBackImageHappy : (this.feedBack == 3 ? this.feedBackImageNormal : this.feedBackImageSad);
  feedBackCaption = this.feedBack == 5 ? this.feedBackCaptionHappy : (this.feedBack == 3 ? this.feedBackCaptionNormal : this.feedBackCaptionSad);
  
  json = {
    // "title": "Thank you for that smile",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "question1",
        "title": "Enter your phone",
        "popupdescription": "Some text",
        "inputMask": "phone",
        "isRequired": true
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "checkbox",
        "name": "question2",
        "title": "What did you like the most?",
        "hasOther": true,
        "choices": [
         {
          "value": "item1",
          "text": "Store"
         },
         {
          "value": "item2",
          "text": "Service"
         },
         {
          "value": "item3",
          "text": "Product"
         }
        ],
        "otherText": "Vendor",
        "isRequired": true
       }
      ]
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question3",
        "title": "Will you visit us again?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ],
        "isRequired": true
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "dropdown",
        "name": "question4",
        "title": "Will you refer our store to any friend?",
        "hasOther": true,
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "Maybe"
         }
        ],
        "otherText": "No",
        "isRequired": true
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "comment",
        "name": "question5",
        "title": "Review your experience with us.",
        "isRequired": true
       }
      ]
     },
     {
      "name": "page6",
      "elements": [
       {
        "type": "rating",
        "name": "question6",
        "title": "How will you rate the product quality?",
        "rateMax": 10,
        "isRequired": true
       }
      ]
     },
     {
      "name": "page7",
      "elements": [
       {
        "type": "imagepicker",
        "name": "question7",
        "title": "Which of the below was the image of your favourite item?",
        "choices": [
         {
          "value": "lion",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
         },
         {
          "value": "giraffe",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
         }
        ],
        "isRequired": true
       }
      ]
     },
     {
      "name": "page8",
      "elements": [
       {
        "type": "matrix",
        "name": "question9",
        "title": "Rate all the products you have bought",
        "columns": [
         "Item 1",
         "Item 2",
         "Item 3"
        ],
        "rows": [
         "I like the quality",
         "I like the vendor",
         "I like the packing"
        ],
        "isRequired": true
       }
      ]
     },
     {
      "name": "page9",
      "elements": [
       {
        "type": "boolean",
        "name": "question8",
        "title": "Did you meet your expectations?",
        "isRequired": true
       }
      ]
     },
     {
      "name": "page10",
      "elements": [
       {
        "type": "multipletext",
        "name": "question10",
        "title": "Review the items you bought",
        "items": [
         {
          "name": "Item 1"
         },
         {
          "name": "Item 2"
         }
        ],
        "isRequired": true
       }
      ]
     },
     {
      "name": "page11",
      "elements": [
       {
        "type": "barrating",
        "name": "question11",
        "title": "Rate your overall experience",
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "isRequired": true
       }
      ]
     },
     {
      "name": "page13",
      "elements": [
       {
        "type": "datepicker",
        "name": "question12",
        "title": "Schedule your next purchase date"
       }
      ],
      "isRequired": true
     },
     {
      "name": "page14",
      "elements": [
       {
        "type": "tagbox",
        "name": "What did you like the most with us?",
        "choices": [
         "Service",
         "Products",
         "Price"
        ],
        "isRequired": true
       }
      ]
     },
     {
      "name": "page15",
      "elements": [
       {
        "type": "sortablelist",
        "name": "What bothered you?",
        "choices": [
         "Service",
         "Products",
         "Price"
        ],
        "isRequired": true
       }
      ]
     }
    ],
    "showProgressBar": "bottom",
    "completedHtml": 
      '<div class="v-center">' +
        '<p><h4>Thank you for your Feedback, Please do visit us again</h4></p>' +
        '<span class="icon">' +
          '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANlSURBVHhe7ZpZyE5BGMc/ZElJubAUIrsiSxE34kJCIkqJSKIkRYlkiewlWVKkXEkickPKlnDpQnGFbBcS2WXn9y9PTdN5P6+8Z8405le/vu995nTOPE9nmTNzmjKZTCaTyWQy1dMLl+BqXIg98L+gDR7E7/jT8Svuw3aYLC3wNLqJ+55FbZckc9FN9jruwEtOTGq7JFHCluRhBRz2oLVdUyA1WuEntCR7oksXtLZ3CqRGH7QEXyjg0R6t/Y0CqTEVLUFdCj5D0drvKJAa69ESPKCAx2y09jMKpIaSsgQ18PHZhta+SYGUaIu6sVmCg9HnHFr7DAVSYiJacvcU8NAT4iXaNr0xKU6gJafnvc9otPZHCqREN/yClqDu9j4b0doPKZASe9GSu6pAAXrs2TbTFUgFDX4+oyU3DX2GobVrAKQBURLoje4CWnK1xve70LY5qkAqLEdL7BuOQp+W+Bhtu+OoCZJaLsL+GD0T0D319cpbhHv3/xsvYrSFGIDP0Tp7CzULVMQQ/IFucvWqccNIjArd0J6hdVL/d8fmGI9bUWfJn9Ql8hFt/xozdMQomIyv0Dr3HnWKN5qB+ATtOGuxUnS334zuJKcKMRbLQmMFO5YusUpZgNYZ+RSHY5m0Rs0i63gfFGgUeia7w9Yi72M/NOahtV3Gzlg2enmyM+6tAo1C1bRkmnMdGroE5qNmctWxEOh12vpyV4FGoTut+/yu5XasEnf26KQCIViDsRRgC1pfNigQgpgKoNUj60uwt8eYCvAArS/BZo9iKUAHtOGzngDB1hFjKcAYtH7cVCAUsRRgMVo/gk6fxVKA/Wj9WKZAKGIpgGaWrB/jFAhFLAV4jdaPTgqEIoYCaEnd+qCXrqDEUIApaH04r0BIYihApX2IoQDH0PowR4GQxFCA22h90IRqUKougGaBbLJGf/U7KFUXYATa8XUmBKfqAuxGO/4RBUJTqwBazNTvnTjp9+9GMwu1vGbH1+OwFLTctAqL1uX03C0qwAq0uNS3gDdQU1Uat2vGpmh/9ajjXEF3/9p3aa/AmvF1D1ZLtwD+569l+hBL/aq83gL43/JqVUjPaPc7n0aqCZBT2BVLRfP9+p7PX5NzVfJa1i5Cp+YgnIkrUZOXRfuoV306txT7YiaTyWQy/0RT0y8agchU4je1WQAAAABJRU5ErkJggg==">' +
        '</span>' +
      '</div>'
   };

  onSurveySaved(survey) {
    console.log(survey);
    this.json = survey;
  }

  sendData(result) { 
    console.log(result);
  }
}
