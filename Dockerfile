FROM denoland/deno:2.0.2

WORKDIR /app
COPY deno.* ./
RUN deno install
COPY . .

CMD ["deno", "task", "start"]