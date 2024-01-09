# Multi Stage Dockerfile, untuk memisahkan proses build dan run, sehingga ukuran image lebih kecil

# Build Stage, menggunakan alias builder, untuk proses kompilasi dan menghasilkan binary file
FROM golang:1.18-alpine as builder
WORKDIR /app/
COPY main.go .
RUN go build -o /app/main main.go

# Run Stage, gunakan sistem operasi yang sama dengan build stage, file dicopy dari builder dan disimpan di folder /app
FROM alpine:3
WORKDIR /app/
COPY --from=builder /app/main ./
CMD /app/main