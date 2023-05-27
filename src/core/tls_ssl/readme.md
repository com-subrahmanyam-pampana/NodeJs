

 openssl genrsa -out my_p_key1.pem 1024

 openssl req -new -key my_p_key1.pem -out my_csr_1.pem

 openssl x509 -req -in my_csr_1.pem -signkey my_p_key.pem -out my_cert_1.pem
