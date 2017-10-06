require_relative 'boot'

require 'rails/all'
require 'active_record/connection_adapters/postgresql_adapter'

# Monkey patch configure_connection because set_limit() must be called on a per-connection basis.
class ActiveRecord::ConnectionAdapters::PostgreSQLAdapter
  private
  alias_method :default_configure_connection, :configure_connection

  def configure_connection
    default_configure_connection
    begin
      puts "begin"
      execute("SELECT set_limit(0.1);")
    rescue ActiveRecord::StatementInvalid
      puts "error"
      Rails.logger.warn("pg_trgm extension not enabled yet")
    end
  end
end

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module IndieNoMo
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

  config.paperclip_defaults = {
        :storage => :s3,
        :s3_protocol => "https",
        :s3_credentials => {
          :bucket => ENV["s3_bucket"],
          :access_key_id => ENV["s3_access_key_id"],
          :secret_access_key => ENV["s3_secret_access_key"],
          s3_host_name: "s3.amazonaws.com",
          :s3_region => ENV["s3_region"],
          :url => ":s3_host_name"
        }
      }

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
