ARG IMAGE_DOCKER

FROM $IMAGE_DOCKER as builder
ARG CI_COMMIT_REF_NAME
WORKDIR /app
RUN apk add --no-cache python3 make g++ git

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN npm run build
                                
FROM $IMAGE_DOCKER as executor
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
ENV PORT 3000
CMD ["node", "server.js"]
