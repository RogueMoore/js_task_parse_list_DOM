'use strict';

const list = document.querySelector('ul');
const listItems = list.children;

// Функция, сортирующая список сотрудников по зарпплате (по убыванию)
function sortList(list) {
  return [...list].sort((a, b) => {
    const salary1 = convertSalaryToNumber(a.dataset.salary);
    const salary2 = convertSalaryToNumber(b.dataset.salary);

    return salary2 - salary1;
  });
}

function convertSalaryToNumber(item) {
  return +item.slice(1).split(',').join('');
}

// Функция, преобразуя список в массив объектов
function getEmployees(list) {
  return [...list].map((item) => ({
    name: item.innerText,
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

function render(parent, children) {
  parent.innerHTML = '';
  children.forEach((employee) => {
    list.append(employee);
  });
}

getEmployees(listItems);
render(list, sortList(listItems));
