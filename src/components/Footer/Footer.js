export function createFooter() {
  const footer = document.createElement("footer");
  footer.className = 'footer';
  footer.innerHTML = ` 
            
              <div class="foofter__text">
                <div class="foofter__text--developer">
                  <p class="text__year">© 2019 CPS</p>
                  <p class="text__company">Разработано командой Apesong</p>
                </div>
                <a href="#" class="text__privacy">Политика конфиденциальности</a>
                <p class="text__info">
                  Информация, размещенная на данной странице, не является публичной
                  офертой
                </p>
              </div>
    `;
  return footer;
}
