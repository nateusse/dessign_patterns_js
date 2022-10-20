const menu = [
    {
      id: 1,
      title: "Factory method",
      category: "Creational pattern",
      img: "https://refactoring.guru/images/patterns/content/factory-method/factory-method-en.png?id=cfa26f33dc8473e803fadae0d262100a",
      desc: `provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.`,
    },
    {
      id: 2,
      title: "Abstract factory",
      category: "Creational pattern",
      img: "https://refactoring.guru/images/patterns/content/abstract-factory/abstract-factory-en.png?id=d0210ee255712a245fead94a3fafabe0",
      desc: `You produce families of related objects without specifying their concrete classes.`,
    },
    {
      id: 3,
      title: "Builder",
      category: "Creational pattern",
      img: "https://refactoring.guru/images/patterns/content/builder/builder-en.png?id=617612423ea3752477dc90929115b3ee",
      desc: `Construct complex objects step by step. Produce different types and representations of an object using the same construction code.`,
    },
    {
      id: 4,
      title: "Prototype",
      category: "Creational pattern",
      img: "https://refactoring.guru/images/patterns/content/prototype/prototype.png?id=e912b1ada20bbf7b2ffc09e93b9fab20",
      desc: `Let you copy existing objects without making your code dependent on their classes `,
    },
    {
      id: 5,
      title: "Singleton",
      category: "Creational pattern",
      img: "https://refactoring.guru/images/patterns/content/singleton/singleton.png?id=108a0b9b5ea5c4426e0afa4504491d6f",
      desc: `Ensure that a class has only one instance, while providing a global access point to this instance.`,
    },
    {
      id: 6,
      title: "Adapter",
      category: "Structural pattern",
      img: "https://refactoring.guru/images/patterns/content/adapter/adapter-en.png?id=11ef6ae6177291834323e3f918c47cd2",
      desc: `Allows objects with incompatible interfaces to collaborate.`,
    },
    {
      id: 7,
      title: "Bridge",
      category:  "Structural pattern",
      img: "https://refactoring.guru/images/patterns/content/bridge/bridge.png?id=bd543d4fb32e11647767301581a5ad54",
      desc: `split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other. `,
    },
    {
      id: 8,
      title: "Composite",
      category: "Structural pattern",
      img: "https://refactoring.guru/images/patterns/content/composite/composite.png?id=73bcf0d94db360b636cd745f710d19db",
      desc: `Compose objects into tree structures and then work with these structures as if they were individual objects. `,
    },
    {
      id: 9,
      title: "Flyweight",
      category: "Structural pattern",
      img: "https://refactoring.guru/images/patterns/content/flyweight/flyweight.png?id=e34fbacb847dd609b5e68aaf252c4db0",
      desc: `Fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.`,
    },
    {
      id: 10,
      title: "Proxy",
      category: "Structural pattern",
      img: "https://refactoring.guru/images/patterns/content/proxy/proxy.png?id=efece4647fb11e3f7539291796327666",
      desc: `Substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

      `,
    },
    {
        id: 11,
        title: "Decorator",
        category: "Structural pattern",
        img: "https://refactoring.guru/images/patterns/content/decorator/decorator.png?id=710c66670c7123e0928d3b3758aea79e",
        desc: `attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.        `,
    },
    {
        id: 12,
        title: "Facade",
        category: "Structural pattern",
        img: "https://refactoring.guru/images/patterns/content/facade/facade.png?id=1f4be17305b6316fbd548edf1937ac3b",
        desc: `Simplified interface to a library, a framework, or any other complex set of classes.`,
    },
    {
        id: 13,
        title: "Chain of Responsibility",
        category: "Behavioral pattern",
        img: "https://refactoring.guru/images/patterns/content/chain-of-responsibility/chain-of-responsibility.png?id=56c10d0dc712546cc283cfb3fb463458",
        desc: `pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain`,
    },
    {
        id: 14,
        title: "Command",
        category: "Behavioral pattern",
        img: "https://refactoring.guru/images/patterns/content/command/command-en.png?id=80fbadc666cf3b9b1958c546d2746ca4",
        desc: `turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.`,
    },
    {
        id: 15,
        title: "Iterator",
        category: "Behavioral pattern",
        img: "https://refactoring.guru/images/patterns/content/iterator/iterator-en.png?id=d19123d71d355d01b0ede4be173eb695",
        desc: `ets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).`,
    },
    {
        id: 16,
        title: "Mediator",
        category: "Behavioral pattern",
        img: "https://refactoring.guru/images/patterns/content/mediator/mediator.png?id=0264bd857a231b6ea2d0c537c092e698",
        desc: `Reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.`,
    },
    {
        id: 17,
        title: "Memento",
        category: "Behavioral pattern",
        img: "https://refactoring.guru/images/patterns/content/memento/memento-en.png?id=e51abf6a98a5b1f91e0f3a000f113e1a",
        desc: `Save and restore the previous state of an object without revealing the details of its implementation.

        `,
    },
    {
        id: 18,
        title: "Observer",
        category: "Behavioral pattern",
        img: "https://refactoring.guru/images/patterns/content/observer/observer.png?id=6088e31e1b0d4a417506a66614dcf065",
        desc: `Dedefine a subscription mechanism to notify multiple objects about any events that happen to the object they are observing.

        `,
    },
    {
        id: 19,
        title: "State",
        category: "Behavioral pattern",
        img: "https://refactoring.guru/images/patterns/content/state/state-en.png?id=c323fb8c54e2d57bebf4806c087afb07",
        desc: `Llets an object alter its behavior when its internal state changes. It appears as if the object changed its class.`,
    },
    {
        id: 20,
        title: "Strategy",
        category: "Behavioral pattern",
        img: "https://refactoring.guru/images/patterns/content/strategy/strategy.png?id=379bfba335380500375881a3da6507e0",
        desc: `Define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.`,
    },
    {
        id: 21,
        title: "Template Method",
        category: "Behavioral pattern",
        img: "https://refactoring.guru/images/patterns/content/template-method/template-method.png?id=eee9461742f832814f19612ccf472819",
        desc: `Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.`,
    },
    {
        id: 22,
        title: "Visitor",
        category: "Behavioral pattern",
        img: "https://refactoring.guru/images/patterns/content/visitor/visitor.png?id=f36d100188340db7a18854ef7916f972",
        desc: `Separate algorithms from the objects on which they operate.  `,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
       
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all patterns"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }