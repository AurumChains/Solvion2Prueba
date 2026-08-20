# Instrucciones para probar el WAF desde el celular

## 1. Abre la terminal en la carpeta del proyecto

```bash
cd "C:\Users\PC\OneDrive\Desktop\Solvion prueba 2"
```

## 2. Activa el entorno virtual

```bash
venv\Scripts\activate
```

## 3. Ejecuta el servidor en todas las interfaces

```bash
python manage.py runserver 0.0.0.0:8000
```

El `0.0.0.0` permite acceso desde otros dispositivos (celular, laptop, etc.)

## 4. Encuentra IP local

abre otra terminal:
```bash
ipconfig
```

sección "Ethernet adapter" o "Conexión de área local". Copia el valor de "IPv4 Address"

ifconfig
```

## 5. En el celular

1. Conéctate a la **misma red WiFi** que tu computadora
2. Abre el navegador y ve a: `http://TU_IP:8000`
3. Reemplaza `TU_IP` con la IP que obtuviste (ej: `http://192.168.1.100:8000`)

## ¿Qué verás?

- Un portal con información de tu IP y navegador
- Un formulario para probar redirecciones del WAF
- Confirmación de que Django está funcionando

## Parar el servidor

Presiona `Ctrl + C` en la terminal
