# #eugr

#eugr es una aplicación web que te da acceso rápido a los servicios electrónicos de la Universidad de Granada. No es una aplicación oficial de la Universidad de Granada y no tiene ningún tipo de relación con la misma.

## Cómo contribuir

### Código

Si quieres contribuir al desarrollo, [abre una issue](https://github.com/e-ugr/e-ugr.github.io/issues/new) con una idea para mejorar la aplicación, o forkea el proyecto y añade la funcionalidad que quieras.

### Difusión

Si conoces gente que haya instalado la UGRApp, adviérteles de [los peligros y problemas que conlleva](https://antiugrapp.github.io/). Les puedes proponer además que usen #eugr como alternativa.

## FAQ

### ¿Cómo pruebo el proyecto en local?

~~~sh
git clone https://github.com/e-ugr/e-ugr.github.io.git eugr
cd eugr
bundle
bundle exec jekyll serve
~~~

En Debian y distribuciones derivadas (como Ubuntu) es necesario instalar `ruby-dev` para instalar todas las gemas necesarias. Esto se puede hacer con:

	sudo apt-get install ruby-dev

En ArchLinux y distribuciones derivadas puedes instalar ruby para instalar las gemas necesarias con:

	sudo pacman -S ruby

En Fedora puedes instalar ruby con:

	sudo dnf install ruby

Una vez instalado Ruby es necesario instalar bundler, para ello simplemente ejecutar:
	
	gem install bundler

### ¿Puedo hacer mi propia versión?

¡Te animamos a que lo hagas! Forkea y personaliza #eugr a tu gusto. Asegúrate de que configuras GitHub Pages para compilar la rama `master`. Las modificaciones que hagas deben ser distribuidas bajo [GPL v3](https://github.com/e-ugr/e-ugr.github.io/blob/master/LICENSE).
