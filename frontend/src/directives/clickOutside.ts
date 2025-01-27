import type { DirectiveBinding } from 'vue'

// Тип для обработчика события
type ClickOutsideHandler = (event: MouseEvent) => void

// Интерфейс для элемента с пользовательским свойством
interface ClickOutsideElement extends HTMLElement {
  clickOutsideEvent?: ClickOutsideHandler
}

export default {
  beforeMount(el: ClickOutsideElement, binding: DirectiveBinding<ClickOutsideHandler>) {
    // Сохраняем обработчик события в свойстве элемента
    el.clickOutsideEvent = function (event: MouseEvent) {
      // Проверяем, что клик был вне элемента
      if (!(el === event.target || el.contains(event.target as Node))) {
        // Вызываем переданный метод
        binding.value(event)
      }
    }

    // Добавляем обработчик события на документ
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: ClickOutsideElement) {
    // Удаляем обработчик события при уничтожении элемента
    if (el.clickOutsideEvent) {
      document.removeEventListener('click', el.clickOutsideEvent)
    }
  },
}
