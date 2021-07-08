# PlanificadorCPU

Se realiza este trabajo como una entrega al estar estudiando los diferentes algoritmos de un planificador de CPU. He realizado este trabajo por medio de JavaScript por la sencillez que me aportaba crear el diseño base de dicho trabajo. 

En el comienzo se te pedirá la cantidad de procesos que van a ser analizados. También he dejado algún detalle, como un botón que te permite poder limpiar otras opciones que hayas realizado anteriormente, para poder ver otros ejemplos si quieres. 

Una vez hayas seleccionado la creacion de los procesos, se creara un panel donde poder ir añadiendo uno a uno las informaciones más relevantes de los processos. Tanto el instante de llegada como también la duración de los mismos. Uno de los detalles a tener en cuenta, es la hora de añadir el primer proceso, el cual siempre debe de comenzar en 0, mientras que los demás no importa el orden en el que sean colocados. Es un detalle que arreglaré próximamente. 

Cuando tengas todas las informaciones de los procesos añadadidas, podrás ver la tabla con la información más relevante que puedes ver acerca de las mismas y también verás una gráfica donde interpretar mejor los datos obtenidos por medio de cada algoritmo. 


1) FIRST COME FIRST SERVED  

Como bien dice el nombre del algoritmo señalado, el proceso que llegue primero será el primero en ser procesado. He planteado este algoritmo, de tal forma que haya un ponto de referencia del tiempo en el que se encuentra. De esta forma, determina el proceso que debe entrar, según el momento en el que está. 

2) SHORTED JOB FIRST (·En producción) 

Este algoritmo permite seleccionar un proceso no sólo por el momento de llegada, si no que también por la duración que este tenga. De esta forma, una vez se encuentren dos o más procesos en espera, se determinará la ejecución por el que menor duración tenga. 

3) ROUND ROBIN (CON PRIORIDAD O QUANTUM -En producción)
Este algoritmo es una mejora del FIRST COME FIRST SERVED, ya que concede un quantum de ejecución contínua, lo que significa que en caso de agotar la duración del proceso según el quantum dado, este pasará a finalizado y continuará otro de los procesos que hayan llegado primero. 
