FROM debian
LABEL maintainer 'Student <aluno from Docker>'

ARG S3_BUCKET=files
ENV S3_BUCKET=${S3_BUCKET}


# building the image
# $ docker image build -t ex-build-args .

# building the image with new argument
# $ docker image build --build-arg S3_BUCKET=newValue -t ex-build-args .

# running it in a container and getting the argument
# $ docker container run ex-build-args bash -c 'echo $S3_BUCKET'
